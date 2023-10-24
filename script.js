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
        divCell.style.backgroundColor = 'black';
    })
  });
}

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener('click', () => {
  const newSize = parseInt(prompt("choose a size for the grid (0-100)"));
  if (newSize > 0 && newSize <= 100) {
    container.innerHTML = "";
    etchASketch(newSize);
  }
})

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}