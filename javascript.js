const container = document.querySelector("#container");
container.style.display = "flex";

function createGrid(size) {

for (let rowcount = 0; rowcount < size; rowcount++) {
    
    const row = document.createElement("div");
    row.style.display = "flex";
    row.classList.add("row");

    for (let colcount = 0; colcount < size; colcount++) {
        const column = document.createElement("div");
        column.classList.add("box");
        column.style.minWidth = "6%";
        column.style.minHeight = "50px";
        row.appendChild(column);
    }

    container.appendChild(row);
}
}

createGrid(16);
