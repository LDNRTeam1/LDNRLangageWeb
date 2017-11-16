// DP Assignation de l evenement click sur le bouton soumettre
const formulaire = document.getElementById("inscriptionForm");
formulaire.addEventListener("submit", function (evenement) {
    let validation;

    //DP validation saisie correcte de toutes les saisies 
    validation = IsAllSaisieValide();

    //DP Si toutes les saisies sont correctes alors envoi du formulaire simule
    if (validation) {
        alert("envoie du formulaire valide");

    } else {
        alert("formulaire invalide");
        evenement.preventDefault();
    }
});

//JA afin que la valeur de la date affiché par défautsoit celle du jour cependant lors du reset de formulaire elle disparait
document.getElementById('dob').valueAsDate = new Date();

// DP Assignation de l evenement click sur le bouton vider
formulaire.addEventListener("reset", function (evenement) {
    alert("remise a zero du formulaire");
    
// JA on reset l'affichage des infos en cas d'erreur    
    let spanclass=document.getElementsByClassName('error'); 
    for(let i=0; i<spanclass.length; i++) {
        spanclass[i].style.display='none';
    }    

});

//DP validation pour toutes les saisies 
function IsAllSaisieValide() {

    // DP validation de la saisie du nom
    let IsNomValide = VerificationNom();

    //DP validation de la saisie du prenom
    let IsPrenomValide = VerificationPrenom();

    //DP validation de la saisie du pseudo
    let IsPseudoValide = VerificationPseudo();

    //DP validation de la saisie du mot de passe
    let IsPwdValide = VerificationPwd();

    //DP validation de la saisie de la confirmation du mot de passe
    let IsConfirmationValide = VerificationConfirmation();

    //DP validation de la date de naissance
    let IsDateNaissanceValide = VerificationDateNaissance();

    //DP validation de la saisie du sexe
    let IsSexeValide = VerificationSexe();

    //DP validation de la saisie de l adresse
    let IsAdresseValide = VerificationAdresse();

    //DP validation de la saisie du code postal
    let IsCodePostalValide = VerificationCodePostale();

    //DP validation de la saisie de la ville
    let IsVilleValide = VerificationVille();

    if (IsNomValide && IsPrenomValide && IsPseudoValide && IsPwdValide && IsConfirmationValide && IsDateNaissanceValide && IsSexeValide && IsAdresseValide && IsCodePostalValide && IsVilleValide) {
        return true;
    } else {
        return false;
    }
    
}

// DP validation de la saisie du nom
function VerificationNom() {
    const nom = document.getElementById("nom");
    const spanNom=document.getElementById("spanNom");
    const LMINI = 2, // DP LMINI = longueur minimale du nom
        LMAXI = 50; //DP LMAXI = longueur maximale du nom

    //DP si le nom comporte moins de 2 lettres ou plus de 50 lettres alors erreur
    if ((nom.value.length < LMINI) || (nom.value.length > LMAXI)) {
        console.log("longueur nom NOK", nom.value.length);
        spanNom.style.display="block";
        return false;
    } else {
        console.log("longueur nom OK", nom.value.length);
         spanNom.style.display="none";
        return true;
    }
}

// DP validation de la saisie du prenom
function VerificationPrenom() {
    const prenom = document.getElementById("prenom");
    const spanPrenom=document.getElementById("spanPrenom");
    const LMINI = 2, // DP LMINI = longueur minimale du prenom
        LMAXI = 50; //DP LMAXI = longueur maximale du prenom

    //DP si le prenom comporte moins de 2 lettres ou plus de 50 lettres alors erreur
    if ((prenom.value.length < LMINI) || (prenom.value.length > LMAXI)) {
        console.log("longueur prenom NOK", prenom.value.length);
        spanPrenom.style.display="block";
        return false;
    } else {
        console.log("longueur prenom OK", prenom.value.length);
        spanPrenom.style.display="none";
        return true;
    }
}

// DP validation de la saisie du pseudo
function VerificationPseudo() {
    const pseudo = document.getElementById("pseudo");
    const spanPseudo=document.getElementById("spanPseudo");
    const LMINI = 6; // DP LMINI = longueur minimale du pseudo

    //DP si le pseudo comporte moins de 6 lettres alors erreur
    if (pseudo.value.length < LMINI) {
        console.log("longueur pseudo NOK", pseudo.value.length);
        spanPseudo.style.display="block";
        return false;
    } else {
        console.log("longueur pseudo OK", pseudo.value.length);
        spanPseudo.style.display="none";
        return true;
    }
}

// DP validation de la saisie du mot de passe
function VerificationPwd() {
    const pwd = document.getElementById("pwd");
    const spanPwd=document.getElementById("spanPwd");
    const LMINI = 8; // DP LMINI = longueur minimale du mot de passe

    //DP si le mot de passe comporte moins de 8 lettres alors erreur
    if (pwd.value.length < LMINI) {
        console.log("longueur pwd NOK", pwd.value.length);
        spanPwd.style.display="block";
        return false;
    } else {
        console.log("longueur pwd OK", pwd.value.length);
        spanPwd.style.display="none";
        return true;
    }
}

// DP validation de la saisie de la confirmation du mot de passe
function VerificationConfirmation() {
    const confirmation = document.getElementById("confirmation");
    const pwd = document.getElementById("pwd");
    const spanConfirmation=document.getElementById("spanConfirmation");
    const LMINI = 8; // DP LMINI = longueur minimale du mot de passe

    //DP si le mot de passe comporte moins de 8 lettres et que la confirmation est differente au mot de passe alors erreur
    if ((confirmation.value.length < LMINI) || (confirmation.value !== pwd.value)) {
        console.log("longueur confirmation NOK", pwd.value.length, confirmation.value.length);
        spanConfirmation.style.display="block";
        return false;
    } else {
        console.log("longueur confirmation OK", pwd.value.length, confirmation.value.length);
        spanConfirmation.style.display="none";
        return true;
    }
}


// DP validation de la saisie de l adresse
function VerificationAdresse() {
    const adresse = document.getElementById("adress");
    const spanAdress=document.getElementById("spanAdress");
    const LMAXI = 100; // DP LMAXI = longueur maximale de l adresse

    //DP si l adresse comporte plus de 100 lettres alors erreur
    if ((adresse.value.length > LMAXI) || (adresse.value.length === 0)) {
        console.log("longueur adresse NOK", adresse.value.length);
        spanAdress.style.display="block";
        return false;
    } else {
        console.log("longueur adresse OK", adresse.value.length);
        spanAdress.style.display="none";
        return true;
    }
}

// DP validation de la saisie du code postal
function VerificationCodePostale() {
    const codePostalSaisie = document.getElementById("codep");
    const codePostal = parseInt(codePostalSaisie.value);
    const spanCodep=document.getElementById("spanCodep");
    const CPMINI = 10000, // DP CPMINI = valeur minimale du code postal
        CPMAXI = 99999; // DP CPMAXI = valeur maximale du code postal

    //DP si le code postal ne comporte pas 5 chiffres alors erreur
    if (isNaN(codePostal) || (codePostal < CPMINI) || (codePostal > CPMAXI)) {
        console.log("code postal NOK", codePostal);
        spanCodep.style.display="block";
        return false;
    } else {
        console.log("code postal OK", codePostal);
        spanCodep.style.display="none";
        return true;
    }
}

// DP validation de la saisie de la ville
function VerificationVille() {
    const ville = document.getElementById("ville");
    const spanVille=document.getElementById("spanVille");
    const LMAXI = 50; // DP LMAXI = longueur maximale de la ville

    //DP si la ville comporte plus de 50 lettres alors erreur
    if ((ville.value.length > LMAXI) || (ville.value.length === 0)) {
        console.log("longueur ville NOK", ville.value.length);
        spanVille.style.display="block";
        return false;
    } else {
        console.log("longueur ville OK", ville.value.length);
        spanVille.style.display="none";
        return true;
    }
}

// DP validation de la saisie du sexe
function VerificationSexe() {
    const sexe = document.getElementsByName("sexe");
    const spanSexe=document.getElementById("spanSexe");

    //DP si l un des boutons radio de sexe est coche alors pas d erreur       
    if ((sexe[0].checked) || (sexe[1].checked)) {
        console.log("sexe OK", sexe[0].checked, sexe[1].checked);
        spanSexe.style.display="none";
        return true;
    } else {
        console.log("sexe NOK", sexe[0].checked, sexe[1].checked);
        spanSexe.style.display="block";
        return false;
    }
}

// DP validation de la date de naissance
function VerificationDateNaissance() {
    const dateDeNaissanceSaisie = document.getElementById("dob").value;
    const spanDate=document.getElementById("spanDate");
    const AGEMINI = 10; //DP age mini 

    //DP calcul de l age 
    let dateDeNaissance = new Date(dateDeNaissanceSaisie);
    let dateAujourdhui = new Date();

    let age = Math.trunc((dateAujourdhui.getTime() - dateDeNaissance.getTime()) / 31536000000);
    console.log("age", age);

    //DP si age est inferieur à 10 alors erreur 
    if (age < AGEMINI) {
        console.log("age NOK", age);
        spanDate.style.display="block";
        return false;
    } else {
        console.log("age OK", age);
        spanDate.style.display="none";
        return true;
    }
}

