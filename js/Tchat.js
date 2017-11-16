//**************************************************************************************************************************
// Partie écrite par Gilles Cros
//
var elt = document.getElementById('submit');
var pseudo = "";
var message = "";
elt.addEventListener('click', fonctionsub);
var xhr = new XMLHttpRequest();
var xhr1 = new XMLHttpRequest();

// fonction appelée lorsque l'utilisateur clique sur le bouton <envoyer>
//----------------------------------------------------------------------
function fonctionsub(e) {
    var pseudo = document.getElementById('pseudo').value;
    var message = document.getElementById('message').value;


    if ((pseudo != "") && (message != ""))
    // Si le pseudo ou le message ne sont pas renseignés, aucune action
    // sinon mise en forme de la requête XHR et envoi au serveur (traitée par putTchatContent.php)
    {
        var urlPost = 'putTchatContent.php';
        xhr1.open('POST', urlPost);
        let formData = new FormData();
        pseudo = "[b]" + pseudo + "[/b]";
        formData.append('pseudo', pseudo);
        formData.append('message', message);
        xhr1.send(formData);
        if ((xhr.status >= 200) && (xhr.status < 400)) {
            concole.log(xhr.responseTest);
        } else {
            concole.error(xhr.status + "" + xhr.statusText);
        }
        e.preventDefault(); //VT arrêt propagation de l'évènement
        document.getElementById('message').value = ""; //VT reinitialisation de la case message après envoi
    }
    // fin fonction fonctionsub
}


// Mise en forme des messages BBcode et smiley
//--------------------------------------------
//Mise enplace d'écouteurs sur chaque boutons de la mise en forme
var eltg = document.getElementById('gras');
eltg.addEventListener('click', miseEnForme);

var elti = document.getElementById('italic');
elti.addEventListener('click', miseEnForme);

var eltb = document.getElementById('barre');
eltb.addEventListener('click', miseEnForme);

var eltr = document.getElementById('red');
eltr.addEventListener('click', miseEnForme);

var eltee = document.getElementById('sourire');
eltee.addEventListener('click', miseEnForme);

var eltes = document.getElementById('surpris');
eltes.addEventListener('click', miseEnForme);

var eltep = document.getElementById('pleure');
eltep.addEventListener('click', miseEnForme);

var eltem = document.getElementById('tirelangue');
eltem.addEventListener('click', miseEnForme);

// Fonction appellée à chaque fois qu'un écouteur de mise en forme réagit
//-----------------------------------------------------------------------
function miseEnForme(v) {
    // on récupère le message, les positions de début et de fin du texte sélectionné 
    // et sur lequel va s'appliquer la mise en forme, le texte sélectionné est mis dans la variable selectedText
    var el = document.form.message;
    var start = el.selectionStart;
    var end = el.selectionEnd;
    v = this.value;
    var selectedText = el.value.substring(start, end);
    // Mise en forme avec la mise en forme choisie (tag), le resultat est placé dans la variable selectedWithTag
    // le traitement est le même pour les BBcode et les smiley, 
    // dans ce dernier cas le smiley sera positionné à la place du curseur dans le message   
    var selectedWithTag = "[" + v + "]" + selectedText + "[/" + v + "]";
    if (v == "r") {
        selectedWithTag = "[color=red]" + selectedText + "[/color]";
    } else if (v == "ee") {
        var selectedWithTag = ":-)" + selectedText;
    } else if (v == "es") {
        var selectedWithTag = ":-O" + selectedText;
    } else if (v == "et") {
        var selectedWithTag = ":-[" + selectedText;
    } else if (v == "ep") {
        var selectedWithTag = ":-(" + selectedText;
    }
    // réécriture du résultat mis en forme dans le champs de formulaire    
    el.focus();
    el.value = el.value.substring(0, start) + selectedWithTag + el.value.substring(end);
    return;
}


// Fin de la Partie écrite par Gilles Cros
//***************************************************************************************************************************







//Partie GET_Vladimir
//---------------------------------------

// actualise historique avec un délai en cliquant sur le bouton envoyer
elt.addEventListener('click', acualisationMessageDelai);
//chargement historique des messages à l'ouverture
window.addEventListener("load", acualisationMessage);
//actualisation du tchat à intervalles réguliers
const intervalMessage = setInterval(acualisationMessage, 30000);

//actualise historique avec un délai en cliquant sur le bouton envoyer
function acualisationMessageDelai() {
    setTimeout(acualisationMessage, 500);
}

//fonction principale d'affichage des messages
function acualisationMessage() {
    const urlGet = 'getTchatContent.php';
    //Requete GET
    xhr.open('GET', urlGet);
    xhr.addEventListener('load', function () {

        //fonction d'affichage du message
        afficheResultats(xhr.responseText);
    });
    xhr.send(null);
}

//fonction d'affichage du message
function afficheResultats(resultat) {
    //élément contenant les messages
    let blocTexte = document.getElementById('tchat'),
        //séparation des messages à partir du contenu de tchatContent.html
        textReponse = resultat.split('<br>'),
        longueurHistorique = 0; //variable qui gère le nombres de messages
    blocTexte.innerHTML = ""; //initialisation élément tchat
    //limite la longueur de l'historique aux 50 derniers messages
    if (textReponse.length > 50) longueurHistorique = 50;
    else longueurHistorique = textReponse.length;

    //boucle affichage historique messages dans l'ordre inverse:
    for (let i = 0; i < longueurHistorique; i++) {
        //insertion messages dans l'élément tchat
        let liste = document.createElement('div');
        liste.appendChild(document.createTextNode(textReponse[i]));
        //conversion bbcode, smiley en éléments html
        bbcode(liste);
        blocTexte.appendChild(liste); //element d'id='tchat' du doc html qui contient les div
    }
}

//Fonction remplacement pseudo en gras, BBCode et smiley
function bbcode(messageBbcode) {
    //Bbcode, pseudo
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\[([bis])\](.+?)\[\/\1\]/g, '<$1>$2</$1>');
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\[color=red\](.+?)\[\/color\]/g, "<span class='rouge '>$1</span>");
    //Smiley
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\)/g, "<img src='images/sourire.png' class='emoticones' alt='sourire'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\(/g, "<img src='images/pleure.png' class='emoticones' alt='triste'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\p/g, "<img src='images/tirelangue.png' class='emoticones' alt='tirelangue'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\O/g, "<img src='images/surpris.png' class='emoticones' alt='surprise'>");
}
