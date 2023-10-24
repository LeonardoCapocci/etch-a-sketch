const container = document.querySelector("#container");
etchASketch();
function etchASketch(n=24) {
  for (let i = 0; i < n; i++) {
    const divRow = document.createElement("div");
    divRow.className = "row";
    container.appendChild(divRow);
    for (let j = 0; j < n; j++) {
      const divCell = document.createElement("div");
      divRow.appendChild(divCell);
      divCell.className = "cell";
    }
  }
  const divCells = document.querySelectorAll(".cell");
  divCells.forEach((divCell) => {
    divCell.addEventListener('mouseover', () => {
        divCell.style.backgroundColor = "red";
    })
  });
}

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener('click', () => {
  container.innerHTML = "";
  const newSize = parseInt(prompt("choose a size for the grid"));
  etchASketch(newSize);
})