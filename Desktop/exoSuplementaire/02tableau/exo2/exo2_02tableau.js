// Écrire un programme qui:
// Affiche la liste de fruits disponibles;
// Demande au client quel fruit il désire acheter:
// s’il est présent dans le tableau fruits: le retirer du tableau, et afficher ‘ok!’,
// sinon, afficher ‘indisponible…’.
// Affiche à nouveau la liste de fruits disponibles.
let fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];

for (let i = 0; i < fruits.length; i++) {
    let listeDispo=document.createElement("li")
    document.body.appendChild(listeDispo)
    listeDispo.textContent=fruits
    let questionClient = document.createElement("input")
    
    let reponsClient = prompt("Q U E L    F R U I T    V O U L E Z - V O U S    ?")
    return

if (reponsClient===fruits["i"]) {
    fruits.splice(fruits.indexOf(i), 1)
    console.log(fruits);
    prompt("O K")
    
}  
return
if (reponsClient!==fruits["i"]) {
    alert("N O U S    N'A V O N S    P A S     C E    F R U I T") 
}
return
}

console.log(fruits);
let fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi'];
 
 
 
let fruitDesire = prompt("Quel fruit désirez-vous acheter ?");
 
let index = fruits.indexOf(fruitDesire);
 
if (index !== -1) {
  fruits.splice(index, 1);
  document.write("ok!");
} else {
  document.write("indisponible...");
}
 