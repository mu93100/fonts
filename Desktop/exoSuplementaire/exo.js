
//PARTIE 1
//  exo 1

//Déclarez une variable et assignez-lui une valeur numérique, c'est-à-dire un nombre, par exemple, 42.
//Déclarez deux variables et assignez leurs des valeurs numériques, en n'utilisant qu'un seul mot-clé comme let .

// exo 2

//Voici une variable. Ecrivez une condition pour savoir si le contenu de cette variable est supérieur à 10. Si tel est le cas, affichez une fenêtre alert() pour en informer l'utilisateur.
let myNumber = 15;


//exo 3
// Ecrivez la condition suivante sour forme de condition ternaire.

let result, number = 42;
			
if (number > 10) {
    result = 'Plus grand que 10';
} else {
    result = 'Plus petit que 10';
}

//exo 4

// Écrivez une boucle while qui se répète 10 fois. Il est vrai qu'une boucle for serait plus adaptée, mais le but est de vous familiariser avec while.

// exo 5
// Ecrivez une boucle while qui se répète tant que l'utilisateur n'a pas entré une valeur correcte via prompt(). En d'autres mots, prompt() s'affiche à chaque exécution de la boucle. Si l'utilisateur entre quelque chose, la boucle s'arrête, et une alert() affiche la valeur entrée dans le prompt(). Si l'utilisateur clic sur Annuler ou ne rentre pas de texte, la boucle continue et réaffiche une nouvelle prompt().



// exo 6
//Déclarez une fonction, qui se contente d'afficher le texte Hello world! dans une alert().

// exo 6bis
// Dans cet exercice vous devez créer une fonction nommée isoNum qui renvoie le nombre 42

//exo 7
// Le code présent dans l'éditeur définit deux variables, numberA et numberB. Une troisème variable, biggest est définie, et contiendra le résultat retourné par la fonction whoIsThebigger(). À vous d'écrire cette foncion, sachant que son but est de comparer deux nombres et de retourner le plus grand des deux.


const numberA = 42;
const numberB = 1337;

const biggest = whoIsTheBiggest(numberA, numberB);

function whoIsTheBiggest(a, b) {
    
}


//exo 8
//Terminez d'écrire la fonction askNumber() qui va demander à l'utilisateur de rentrer un nombre avec une prompt(). Une fois le nombre rentré, la fonction va convertir la chaîne de caractères entrée un nombre, et elle vérifiera s'il s'agit bien un nombre. Si ce n'est pas un nombre, la fonction redemande à l'utilisateur d'en entrer un. Dès que le nombre est correct, la fonction le retourne avec return.

// Trois choses doivent donc êtres utilisées ici : une boucle qui se répète tant que l'utilisateur ne rentre pas un nombre correct, parseInt() et isNaN(). Vous connaissez la fonction parseInt(), mais pas isNaN(). Regardez le code ci-contre pour comprendre son fonctionnement.

function askNumber() {
    
}

alert('Le nombre est : ' + askNumber());

//exo 10

//Le code ci-dessous initialise un tableau avec quelques valeurs. Ecrivez une boucle for pour parcourir ce tableau et afficher chaque valeur avec une alert(). Utilisez var pour déclarer la ou les variables au sein de la boucle.

let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];




//PARTIE 2 

//exo 11
// Au sein du <div id="output"> se trouvent un id #text et un lien <a href="#">. Ce lien ne mène nulle part puisqu'il vaut #. Il faudrait donc modifier son attribut href pour le faire pointer vers le lien de votre choix

// Écrivez le code qui permet de faire ça. 

//html :  <a href="#">lien vers...</a>

//exo 12
//  une structure DOM sous forme de code HTML vous est donnée, et il vous est demandé de recréer cette structure en utilisant le DOM en Javascript.

// Utilisez le <div id="output"> pour insérer votre structure DOM. Pour ce premier Mini-TP, le code que vous devez recréer est donné ci-dessous.

// <div id="divTP1">
// Le <strong>World Wide Web Consortium</strong>, abrégé par le sigle <strong>W3C</strong>, est un 
// <a href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation" title="Organisme de normalisation">
//     organisme de standardisation</a>
// à but non-lucratif chargé de promouvoir la compatibilité des technologies du 
// <a href="http://fr.wikipedia.org/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a>.
// </div>


//exo 13
//Retirer le dernière valeur du tableau jours
// Afficher les valeurs du tableau en utilisant la méthode document.write
// Ajouter la valeur ‘dim’ à la fin du tableau
// Remplacer la valeur ‘mra’ par ‘mar’
// Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
// Afficher la troisième valeur du tableau
let semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];


z
// exo 14
// Écrire un programme qui:
// Affiche la liste de fruits disponibles;
// Demande au client quel fruit il désire acheter:
// s’il est présent dans le tableau fruits: le retirer du tableau, et afficher ‘ok!’,
// sinon, afficher ‘indisponible…’.
// Affiche à nouveau la liste de fruits disponibles.
let fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];

// exo 14 
// A l'aide du DOM-0, faites en sorte que quand ce bouton est cliqué, il affiche Vous m'avez cliqué à la place de Cliquez-moi, comme c'est le cas dans l'exemple ci-contre. C'est la même chose que l'exercie précédent, sauf qu'ici vous devez utiliser onclick et non addEventListener().

// <button>Cliquez moi</button>

// exo 15 
//. Attachez une événement sur le <button> de manière à masquer l'<aside> s'il est affiché, et de l'afficher s'il est masqué — ce que l'on appele généralement un toggle.

// <button type="button">Toggle</button>

// {/* 

// <aside>Cachez ce contenu que je ne saurais voir.</aside>
// 
//  */}


// EXO 16 
// verifier deux adresse mail 
// ici deux input text de texte donnant la possibilité au user d'entrer son adresse mail et une seconde fois pour comparer.
// reaisez un script qui compare les deux les deux adresse mail au click d'un bouton et envoie un alert soit negative ( pas le même adresse mail) soit ok (même adresse mail)

let email_1 = document.getElementById('email-1'),
    email_2 = document.getElementById('email-2');

