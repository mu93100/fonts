// Écrire un programme qui:
// Affiche la liste de fruits disponibles;
// Demande au client quel fruit il désire acheter:
// s’il est présent dans le tableau fruits: le retirer du tableau, et afficher ‘ok!’,
// sinon, afficher ‘indisponible…’.
// Affiche à nouveau la liste de fruits disponibles.
let fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];

function fru() {
    let listeDispo=document.createElement("li")
    document.body.appendChild(listeDispo)
    listeDispo.textContent=fruits
    let questionClient = document.createElement("input")
    
    
    let reponsClient = prompt("V O U S   V O U L E Z     Q U E L    F R U I T   ?")
    
if (reponsClient!==fruits[i]) {
    alert("N O U S    N'A V O N S    P A S     C E    F R U I T")
    
}
// if (condition) {
    
// }    
}
fru (fruits)