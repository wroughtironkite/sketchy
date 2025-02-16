const container = document.querySelector("#container");

function createGrid(size) {

for (let rowcount = 0; rowcount < size; rowcount++) {
    
    let boxHeight = "";
    let rawWidth = 100;
    if (size < 42) {
        boxHeight = "50px";
        rawWidth = 95;    
    }
    if (size >= 42 && size < 66) {
        boxHeight = "25px";
        rawWidth = 90;
    }
    if (size >= 66) {
        boxHeight = "10px";
        rawWidth = 85;
    }
    let rawBoxWidth = rawWidth/size;
    let boxWidth = rawBoxWidth.toFixed(2) + "%";
    
    


    const row = document.createElement("div");
    row.style.display = "flex";
    row.classList.add("row");

    for (let colcount = 0; colcount < size; colcount++) {
        const column = document.createElement("div");
        column.classList.add("box");
        column.style.minWidth = boxWidth;
        column.style.minHeight = boxHeight;
        row.appendChild(column);
        let opacity = 0.1;

        column.addEventListener("mouseover", () => {
                        
            let randomColor = "rgba(" + Math.floor(Math.random()*255) + ", " +
            Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + opacity + ")";

            column.style.backgroundColor = randomColor;
            opacity = opacity + 0.1;
        })
    }

    container.appendChild(row);
}


}

// create initial grid
let gridSize = 16;

createGrid(gridSize);

// reset and change size buttons
const resetButton = document.querySelector("#leftbutton");
const changeButton = document.querySelector("#rightbutton");

changeButton.addEventListener("click", () => {
    let newSize = prompt ("How big do you want it? (Must not exceed 100).");
    while (newSize > 100) {
        newSize = prompt ("That's too big! Try again! (Must not exceed 100).");
    }
    gridSize = newSize;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
})


// just resets to most recent grid size
resetButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
})


