const container = document.querySelector("#container");

n = 16

for (let i = 0; i < n; i++) {
  const divRow = document.createElement("div");
  divRow.className = "row";
  container.appendChild(divRow);
  for (let j = 0; j < n; j++) {
    const divCell = document.createElement("div");
    divRow.appendChild(divCell);
    divCell.className = "cell";
    divCell.textContent= "hi";
  }
}