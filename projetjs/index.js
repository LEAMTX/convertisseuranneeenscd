
// Sélectionne le corps du tableau pour y ajouter des lignes, selectionne lement html avec id du tableau annee--> element table
//selectionne tbody[0]  --> section ou les lignes seront ajoutées 
const tableau = document.getElementById('tableauAnnees').getElementsByTagName('tbody')[0];

// Fonction pour vérifier si une année est bissextile
function estBissextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
    //année divisble par 4 et non par 100 --> bisextille ou divisible par 400.
}

// Fonction pour ajouter une ligne dans le tableau
function ajouterLigne(annee, type, secondes) {
    const nouvelleLigne = tableau.insertRow();
    nouvelleLigne.insertCell(0).textContent = annee; //ajouter une cellule td avec 3 colonnes dedans (année), type, sec-> y assigner le texte suivant
    nouvelleLigne.insertCell(1).textContent = type; // text.content assigne les valeurs conrrespondantes 
    nouvelleLigne.insertCell(2).textContent = secondes;
}

// Fonction principale déclenchée par le clic sur le bouton
function saisirAnnee() {
    const annee = parseInt(prompt("Saisissez une année :"), 10); //affiche une boite de dialogue pour demander àl'utilisateur de saisir une année 
    //retour chaine de caractère avec ce qu'il à taper--> parseInt la convertit en entier , decial base de 10. 

    if (!isNaN(annee)) { 
        // Vérifie si l'année est bissextile
        const bissextile = estBissextile(annee);
        const type = bissextile ? "Bissextile" : "Non bissextile";
        const secondes = bissextile ? 366 * 24 * 3600 : 365 * 24 * 3600;

        // Ajoute la ligne au tableau
        ajouterLigne(annee, type, secondes);

        // Message de confirmation dans la console
        console.log(`L'année ${annee} est ${type} et contient ${secondes} secondes.`);
    } else {
        // Si la saisie n'est pas un nombre valide
        alert("Veuillez saisir une année valide !");
    }
}

// Ajoute un écouteur d'événement sur le bouton "Ajouter"
document.getElementById('ajouter').addEventListener('click', saisirAnnee);