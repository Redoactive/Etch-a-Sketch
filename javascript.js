const mainContainer = document.querySelector("#mainDiv");
const button = document.querySelector("#butt");

function askForSize(){
    let userInput = prompt("Enter the amount of grid size:");
    if(userInput > 100 || userInput < 1){
        alert("Incorrect amount");
    }else{
        createGrid(userInput);
    }
}
function createGrid(maxSize){
    mainContainer.textContent = "";
    for (let index = 0; index < maxSize; index++) {
        const column = document.createElement("div");
        column.classList.add("column");
        mainContainer.appendChild(column);
        for (let x = 0; x < maxSize; x++) {
            const tile = document.createElement("div");
            tile.classList.add("tiles", "row");
            tile.addEventListener("mouseover", () => tile.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16));
            column.appendChild(tile);
        }
        
    }
}
