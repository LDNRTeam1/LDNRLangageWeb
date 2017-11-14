////Partie POST_Gilles
//
//
////    pseudo = '[b]' + pseudo + '[/b]';
//// Partie écrite par Gilles Cros
////------------------------------
//var elt = document.getElementById('submit');
//var pseudo = "";
//var message = "";
//elt.addEventListener('click', fonctionsub);
//var xhr = new XMLHttpRequest();
//
//function fonctionsub() {
//    var pseudo = document.getElementById('pseudo').value;
//    var message = document.getElementById('message').value;
//
//    // les remplacements suivants seront fait par vladimir un peu plus bas
//    //    message=message.replace('[/','</');
//    //    message=message.replace('[','<');
//    //    message=message.replace(']','>');
//
//    if ((pseudo != "") && (message != "")) {
//        var urlPost = 'http://localhost/Projetsitedejeu/putTchatContent.php';
//        xhr.open('POST', urlPost);
//        let formData = new FormData();
//        formData.append('pseudo', pseudo);
//        formData.append('message', message);
//        xhr.send(formData);
//        /* je mets en commentaires ce qui suit car problèmes sur firefox
//        if ((xhr.status >= 200)  (xhr.status < 400))
//	       {
//	       concole.log(xhr.responseTest);
//           }
//        else
//	       {
//	       concole.error(xhr.status + "" + xhr.statusText);
//	       }
//        */
//    }
//
//}
//
//var eltg = document.getElementById('gras');
//var mef = eltg.value;
//eltg.addEventListener('click', miseEnForme);
//
////var elti=document.getElementById('italic');
////elti.addEventListener('click', miseEnForme);
//
//
//
//function mouseover(el) {
//    el.className = "raised";
//}
//
//function mouseout(el) {
//    el.className = "button";
//}
//
//function mousedown(el) {
//    el.className = "pressed";
//}
//
//function mouseup(el) {
//    el.className = "raised";
//}
//
////function format_sel(v) {
//function miseEnForme(v) {
//    var el = document.form.message;
//    var start = el.selectionStart;
//    var end = el.selectionEnd;
//    v = mef;
//    var selectedText = el.value.substring(start, end);
//    var selectedWithTag = "<" + v + ">" + selectedText + "</" + v + ">";
//    el.focus();
//    el.value = el.value.substring(0, start) + selectedWithTag + el.value.substring(end);
//    return;
//}
//// Fin de la Partie écrite par Gilles Cros



//Partie GET_Vladimir

const intervalMessage = setInterval(acualisationMessage, 5000); //actualisation du tchat
function acualisationMessage() { //fonction GET
    const xhr = new XMLHttpRequest();
    const urlGet = 'getTchatContent.php';
    //Requete GET
    xhr.open('GET', urlGet);
    xhr.addEventListener('load', function () {

        //fonction d'affichage du message
        afficheResultats(xhr.responseText);
    });
    xhr.send(null);
}

//Fonction remplacement pseudo en gras, BBCode et smiley
function bbcode(messageBbcode) {
    //Bbcode, pseudo
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\[([bis])\](.+?)\[\/\1\]/g, '<$1>$2</$1>');
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\[color=red\](.+?)\[\/color\]/g, "<span class='rouge '>$1</span>");
    //Smiley
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\)/g, "<img src='emoticones/sourire.png' class='emoticones' alt='sourire'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\(/g, "<img src='emoticones/pleure.png' class='emoticones' alt='triste'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\[/g, "<img src='emoticones/tirelangue.png' class='emoticones' alt='tirelangue'>");
    messageBbcode.innerHTML = messageBbcode.innerHTML.replace(/\:\-\O/g, "<img src='emoticones/surpris.png' class='emoticones' alt='surprise'>");
}

//fonction d'affichage du message
function afficheResultats(resultat) {
    let blocTexte = document.getElementById('tchat'), //élément contenant les messages
        textReponse = resultat.split('<br>'); //création de la collection à partir du contenu de tchatContent.html
    //boucle affichage historique messages dans l'ordre inverse:
    for (let i = textReponse.length - 1; i >= 0; i--) {
        //insertion messages dans l'élément tchat
        let liste = document.createElement('div');
        liste.appendChild(document.createTextNode(textReponse[i]));
        bbcode(liste); //conversion bbcode, smiley en éléments html
        blocTexte.appendChild(liste); //element d'id='tchat' du doc html qui contient les div
    }
}
