//Déclarez une variable et assignez-lui une valeur numérique, c'est-à-dire un nombre, par exemple, 42.
//Déclarez deux variables et assignez leurs des valeurs numériques, en n'utilisant qu'un seul mot-clé comme let .
let nounours=17
let doudou, dada
dada=15
didi=3
console.log(nounours);
console.log(dada, didi);


//Voici une variable. Ecrivez une condition pour savoir si le 
// contenu de cette variable est supérieur à 10. 
// i tel est le cas, affichez une fenêtre alert() 
// pour en informer l'utilisateur.
let myNumber = 51; // let myNumber = 51, myNumber2=4
let myNumber2=4
function sup10(i) {
    if (i>10) {
        alert("myNumber"+ " " +(i)+ " " + "est supérieure à 10") 
    } else {
        alert((i)+ " " +"dance")
    }
}
sup10 (myNumber)
sup10(myNumber2)
sup10(didi)
sup10(dada)

//  une structure DOM sous forme de code HTML vous est donnée, et il 
// vous est demandé de recréer cette structure en utilisant le DOM en Javascript.

// Utilisez le <div id="output"> pour insérer votre structure DOM. Pour ce premier Mini-TP, le code que vous devez recréer est donné ci-dessous.

// <div id="divTP1">
// Le <strong>World Wide Web Consortium</strong>, abrégé par le sigle <strong>W3C</strong>, est un 
// <a href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation" title="Organisme de normalisation">
//     organisme de standardisation</a>
// à but non-lucratif chargé de promouvoir la compatibilité des technologies du 
// <a href="http://fr.wikipedia.org/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a>.
// </div>