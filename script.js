// // ---------------------------------------------
// Exercice 1 : Sélectionner et Modifier un élément HTML
// // ---------------------------------------------

let titre = document.getElementById("titre");
titre.textContent = "Bonjour, étudiant !";


// let para = document.getElementsByTagName("p");
// para[0].style.color = "red";
// para[0].style.fontSize = "20px";

// let para = document.getElementById("texte");
let para = document.querySelector("p")
para.style.color = "red";
para.style.fontSize = "20px";

// // ---------------------------------------------
// Exercice 2 : Créer et Ajouter un Élément HTML
// // ---------------------------------------------
let conteneur = document.getElementById("conteneur"); 
let nouvelleListe = document.createElement("ul");

conteneur.append(nouvelleListe);

nouvelleListe = document.querySelector("ul");
let menu1 = document.createElement("li");
let menu2 = document.createElement("li");
let menu3 = document.createElement("li");
menu1.textContent = "Apprendre JavaScript";
menu2.textContent = "Pratiquer la manipulation du DOM";
menu3.textContent = "Créer un projet";
nouvelleListe.append(menu1, menu2, menu3);

// // ---------------------------------------------
// Exercice 3 : Supprimer un Élément HTML
// // ---------------------------------------------

let button = document.querySelector("#deleteBtn");
let articles = document.querySelector("#articles");

button.addEventListener("click", function(){
    // console.log(articles.lastChild);
articles.lastElementChild.remove();


} )

// // ---------------------------------------------
// Exercice 4 :  Ajouter des Écouteurs d'Événements et Manipuler des Tableaux
// // ---------------------------------------------
let elements= [];
let bouton = document.querySelector("#addItemBtn");

bouton.addEventListener("click", function() {
    let newItem = elements.length +1;
    elements.push(newItem);
    console.log(elements);
    numberElement = document.createElement("li");
    numberElement.textContent = newItem;

    let list = document.querySelector("#liste");
    list.append(numberElement);
})

// // ---------------------------------------------
// Exercice 5 : Utiliser des Objets et Manipuler le DOM
// // ---------------------------------------------

const users = [
 { name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
 { name: "Charlie", age: 35 },
];

let userlist = document.querySelector("#userList");
let listing = 0;
for(let list of users){
    listing = document.createElement("li");
    listing.textContent = `Nom : ${list.name} Age : ${list.age}`

    console.log(list.name);    
    userlist.append(listing);
}



