// CREATION DE L'INPUT, UL,LI + BUTTON DELETE

let elemUl = document.createElement("ul");
let listLi = document.getElementById("liste");
listLi.append(elemUl);
let input = document.querySelector("#liste input");
let button = document.querySelector("#liste button");
let divButton = document.createElement("div");


let taches = () => {
    let elemLi = document.createElement("li");
    let contenuLi = document.createTextNode(input.value);
    elemLi.className = "text-left"
    elemLi.append(contenuLi, divButton);

    let buttonDelet = document.createElement("button");
    buttonDelet.className = "btn btn-outline-danger";
    let contenuButton = document.createTextNode("Delete");
    buttonDelet.append(contenuButton);
    divButton.append(buttonDelet);
    divButton.className = "text-right"
    elemUl.prepend(elemLi)
    input.value = ""
}
button.addEventListener("click", taches);
console.log(listLi)