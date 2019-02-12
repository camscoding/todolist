// CREATION DE L'INPUT, UL,LI + BUTTON DELETE

let elemUl = document.createElement("ul");
let listLi = document.getElementById("liste");
listLi.append(elemUl);
let input = document.querySelector("#liste input");
let button = document.querySelector("#liste button");


let taches = () => {
    let divButton = document.createElement("div");
    let elemLi = document.createElement("li");
    let spanText = document.createElement("span");
    spanText.innerText = input.value;
    spanText.style.fontFamily = "system-ui";
    spanText.style.fontWeight = "bold"
    spanText.className = "text-left"
    elemLi.append(divButton);
    elemLi.prepend(spanText);
    console.log(elemUl)

    // Creation du button Delete + fonction
    let buttonDelet = document.createElement("button");
    buttonDelet.innerText = "Delete"
    buttonDelet.className = "btn btn-outline-danger";
    divButton.append(buttonDelet);
    elemUl.prepend(elemLi)
    input.value = ""

    let supprimeTache = () => {
        elemUl.removeChild(elemLi);
    }
    buttonDelet.addEventListener("click", supprimeTache);

    // Creation du button Done + fonction
    let buttonDone = document.createElement("button");
    buttonDone.innerText = "Done";
    buttonDone.className = "btn btn-outline-warning";
    divButton.append(buttonDone);
    divButton.className = "text-right";
    elemUl.prepend(elemLi);

    let toggDone = () => {
        if (elemLi.style.textDecoration === "line-through") {
            elemLi.style.textDecoration = "";
            elemLi.style.color = "";
            elemLi.style.backgroundColor = ""
        } else {
            elemLi.style.textDecoration = "line-through";
            elemLi.style.color = "rgba(144, 144, 144, 0.84)";
            elemLi.style.backgroundColor = "rgba(208, 206, 131, 0.14)"
        };
    };
    buttonDone.addEventListener("click", toggDone);

    // let termineTache = () => {
    //     elemLi.style.textDecoration = "line-through";
    //     elemLi.style.color = "#23232169";
    //     elemLi.style.backgroundColor = "#ecececb0"
    // };
    // buttonDone.addEventListener("click", termineTache);

    // Creation button valider + fonction
    let buttonValid = document.createElement("button");
    buttonValid.className = "btn btn-outline-success ";
    let icon = document.createElement("i");
    icon.className = "fas fa-check";
    buttonValid.append(icon);
    divButton.append(buttonValid)

    let toggValid = () => {
        if(elemLi.style.backgroundColor === "rgba(167, 191, 168, 0.34)") {
            elemLi.style.backgroundColor = "";
        } else {
            elemLi.style.backgroundColor = "rgba(167, 191, 168, 0.34)"
        }
    }
    buttonValid.addEventListener("click", toggValid);


    // CREATION BUTTON EDIT + FONCTION
    let buttonEdit = document.createElement ("button");
    buttonEdit.className = "btn btn-outline-info";
    let iconEdit = document.createElement("i");
    iconEdit.className = "far fa-edit";
    buttonEdit.append(iconEdit)
    divButton.append(buttonEdit);

    edition = false;
    let changeInput = () => {
        if (edition == false) {
            let inputEdit = document.createElement("input");
            inputEdit.addEventListener('click', () => {
                event.stopPropagation();
            })
            buttonEdit.append(inputEdit);
            edition = true;
        } else {
            let inputEdit = buttonEdit.children[1];
            console.log(buttonEdit);
            buttonEdit.removeChild(inputEdit);
            spanText.innerText = inputEdit.value
            // validInput();
            edition = false;
        }
        
    }
    // let validInput = () => {
    //     console.log('on lance validInput');
    //     // buttonEdit.contentEditable = "true";
    //     console.log(inputEdit)
    // }
    // buttonEdit.addEventListener("click",validInput);
    buttonEdit.addEventListener("click", changeInput);
    console.log(elemUl)
}
button.addEventListener("click", taches);