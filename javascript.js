const mainContainer = document.querySelector("#mainDiv");

for (let index = 0; index < 16; index++) {
    const column = document.createElement("div");
    column.classList.add("tiles", "column");
    mainContainer.appendChild(column);
    for (let x = 0; x < 16; x++) {
        const tile = document.createElement("div");
        tile.classList.add("tiles", "row");
        tile.textContent = "r";
        column.appendChild(tile);
    }
    
}

