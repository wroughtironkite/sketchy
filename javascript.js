const container = document.querySelector("#container");
container.style.display = "flex";

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

        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = "black";
        })
    }

    container.appendChild(row);
}
}

createGrid(16);


