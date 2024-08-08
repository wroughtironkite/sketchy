const container = document.querySelector("#container");
container.style.display = "flex";
for (let rowcount = 0; rowcount < 16; rowcount++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.classList.add("box", "row");

    for (let colcount = 0; colcount < 16; colcount++) {
        const column = document.createElement("div");
        column.classList.add("box");
        row.appendChild(column);
    }

    container.appendChild(row);
}

