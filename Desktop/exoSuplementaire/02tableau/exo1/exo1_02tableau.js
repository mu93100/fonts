//Retirer le dernière valeur du tableau jours
// Afficher les valeurs du tableau en utilisant la méthode 
// (createElement + textContent)
// Ajouter la valeur ‘dim’ à la fin du tableau
// Remplacer la valeur ‘mra’ par ‘mar’
// Afficher le nombre de valeurs du tableau en utilisant la méthode
// (createElement + textContent)
// Afficher la troisième valeur du tableau
let semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];
semaine.pop()
console.log(semaine);

let liSemaine=document.createElement("li") // création de li
document.body.appendChild(liSemaine) // où on place li dans le dom
liSemaine.textContent= semaine // on remplit li avec quoi
liSemaine.style.color="black"

console.log(liSemaine);


semaine.push("dim")
console.log(semaine);

semaine.splice(1,1,"mar") //en 1 ligne
// semaine.splice(1,1)
// console.log(" j'enlève mra", semaine);
// semaine.splice(1,0, "mar") OU semaine[1]="mar"
console.log("je rajoute mar", semaine);
liSemaine.textContent= semaine

let affichNbVal=document.createElement("p")
document.body.appendChild(affichNbVal)
affichNbVal.textContent= ("je suis très fière de pouvoir afficher la longueur du TAB * * * * * " + semaine.length)


let affichLaVal3=document.createElement("h1")
document.body.appendChild(affichLaVal3)
affichLaVal3.textContent="avec la val 3 :------ " + semaine[3]
// function affich(i) {
//     i.textContent="avec la val 3 :- " + semaine[i]
// }
// affich(3) affichLaVal3
