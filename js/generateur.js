let bLabel=document.getElementById('bLabel'),
    bText=document.getElementById('bText'),
    bButton=document.getElementById('bButton'),
    saisie=document.getElementById('saisie'),
    geneform=document.getElementById('geneform'),
    affichecode=document.getElementById('affichecode');

const listButton=document.getElementsByTagName('button');

// On crée les eventlistener sur les 3 boutons 
bLabel.addEventListener('click', afficheLabel);
bText.addEventListener('click', afficheText);
bButton.addEventListener('click', afficheButton);


const newDivl=document.createElement('div'); //div du label
newDivl.id="newDiv";
newDivl.style="display: block;";

const newDivt=document.createElement('div'); //div de la zone de texte
newDivt.id="newDiv";
newDivt.style="display: block;";

const newDivb=document.createElement('div'); //div deu bouton
newDivb.id="newDiv";
newDivb.style="display: block;";

const newLabell=document.createElement('label'); //partie texte du Label
newLabell.id="newLabel";
newLabell.className="new";
newLabell.innerHTML="Texte du label";

const newLabelt=document.createElement('label'); // partie texte de la zone de texte
newLabelt.id="newLabel";
newLabelt.className="new";
newLabelt.innerHTML="Boite de texte";

const newLabelb=document.createElement('label'); // partie texte du bouton
newLabelb.id="newLabel";
newLabelb.className="new"
newLabelb.innerHTML="Bouton";

const newInputl=document.createElement('input'); // Ici on crée un input ou on rentra le nom du label que l'on souhaite généré
newInputl.type="text";
newInputl.className="new"
newInputl.placeholder="Texte du label";
newInputl.id="newInput";

const newInputt=document.createElement('input'); // Ici on crée un input ou on rentra l'id de la zone de texte que l'on souhaite générée
newInputt.type="text";
newInputt.className="new";;
newInputt.placeholder="Zone de Texte";
newInputt.id="newInput";

const newInputb=document.createElement('input'); // Ici on crée un input ou on rentra le nom du bouton que l'on souhaite généré
newInputb.type="text";
newInputb.className="new";
newInputb.placeholder="Bouton";
newInputb.id="newInput";

const newButton1=document.createElement('button'); // Le bouton ok 
newButton1.id="newButton1";
newButton1.className="new";
newButton1.innerHTML="Ok";

const newButton2=document.createElement('button'); // le bouton cancel
newButton2.id="newButton2";
newButton2.className="new";
newButton2.innerHTML="Cancel";

const helpDiv=document.createElement('div'); // la partie descriptif du fonctionnement du générateur
helpDiv.id="help";
helpDiv.innerHTML="Utilisez la zone de texte ci-dessus pour définir le texte à insérer dans le label, puis cliquez sur <strong>OK</strong> pour afficher le label dans la partie gauche de la page ou sur <strong>Annuler</strong> pour annuler l'insertion du label.";

const prelabel=document.createElement('div');
prelabel.id="code";

const br=document.createElement('br');


// les fonctions permettent de d'insérer le div et les élements enfants dans la zone de saisie
function afficheLabel (evt) {
   
    saisie.appendChild(newDivl);
    newDivl.appendChild(newLabell);
    newDivl.appendChild(newInputl);
    newDivl.appendChild(br);
    newDivl.appendChild(newButton1);   
    newDivl.appendChild(newButton2);
    saisie.appendChild(br);
    saisie.appendChild(helpDiv);
    
    // cette boucle nous permet de désactiver les boutons Label, Zone de texte et Boutton
    for (let i=0; i<listButton.length-2; i++) {
        listButton[i].disabled="true";
    };
    
}

function afficheText (evt) {
   
    saisie.appendChild(newDivt);
    newDivt.appendChild(newLabelt);
    newDivt.appendChild(newInputt);
    newDivt.appendChild(br);
    newDivt.appendChild(newButton1);   
    newDivt.appendChild(newButton2); 
    saisie.appendChild(br);
    saisie.appendChild(helpDiv);
    
    // cette boucle nous permet de désactiver les boutons Label, Zone de texte et Boutton
    for (let i=0; i<listButton.length-2; i++) {
        listButton[i].disabled="true";
    };
}

function afficheButton (evt) {
   
    saisie.appendChild(newDivb);
    newDivb.appendChild(newLabelb);
    newDivb.appendChild(newInputb);    
    newDivb.appendChild(newButton1);   
    newDivb.appendChild(newButton2); 
    saisie.appendChild(br);
    saisie.appendChild(helpDiv);
    
    // cette boucle nous permet de désactiver les boutons Label, Zone de texte et Boutton
    for (let i=0; i<listButton.length-2; i++) {
        listButton[i].disabled="true";
    };
}

// On ajoute l'eventlistener sur le bouton cancel pour supprimer les nods ajouter et réactiver les boutons
newButton2.addEventListener('click', reset);
function reset(evt) {
     // cette boucle nous permet de réactiver les boutons Label, Zone de texte et Boutton
    for (let i=0; i<listButton.length-2; i++) {
        listButton[i].disabled=false;
    };
    // lorsque l'on annule la saisie on veut que la partie qui est apparue disparait et que le texte dans le Input soit effacé
    if (newDivl.parentNode==saisie) {
        saisie.removeChild(newDivl);
        newInputl.value="";
    }
    if (newDivt.parentNode==saisie) {
        saisie.removeChild(newDivt);
        newInputt.value="";
    }
    
    if (newDivb.parentNode==saisie) {
        saisie.removeChild(newDivb);
        newInputb.value="";
    }
    
    if (helpDiv.parentNode==saisie) {
        saisie.removeChild(helpDiv);
    }  
}

newButton1.addEventListener('click', suite);
function suite(evt) {
    // on crée les éléments html pour faire apparaitre dans la partie formulaire
    if (newButton1.parentNode==newDivl) {
        const label=newInputl.value;
        const formLabel=document.createElement('span');
                
        formLabel.className="first";
        geneform.appendChild(formLabel);
        formLabel.innerHTML=label;
    }
    
    if (newButton1.parentNode==newDivt) {
        const zText=newInputt.value;
        const formzText=document.createElement('input');
        
        formzText.id=zText;
        formzText.type="text";
        formzText.className="second";
        geneform.appendChild(formzText);
        geneform.appendChild(br);
    }
    
    if (newButton1.parentNode==newDivb) {
        const btn=newInputb.value;
        const formSpan=document.createElement('span');
        const formBtn=document.createElement('button');
                
        formSpan.className="first";
        formBtn.className="second";
        formBtn.innerHTML=btn;
        geneform.appendChild(formSpan)
        geneform.appendChild(formBtn);
        geneform.appendChild(br);
        
    }
    
    //on reset la fenetre de saisie quand on clique sur ok 
    reset();  

    //Ici on récuère le innerHTML et on remplace les < et > par leur nom
    prelabel.innerHTML='';
    var texte=geneform.innerHTML || geneform.textContent;
    var texte1=texte.replace(/</gi, "&lt;");
    var texte2=texte1.replace(/>/gi, "&gt;");
    prelabel.innerHTML=texte2; 
    affichecode.appendChild(prelabel);


    
}

