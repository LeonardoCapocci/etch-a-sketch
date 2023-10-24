const container = document.querySelector("#container");

n = 100

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
