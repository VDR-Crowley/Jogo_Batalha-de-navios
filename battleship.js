/* Visivel para o usuario */
let view = {
  displayMessage(msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}

/* Localização dos navios */
let ships = [
  { location: ["10", "20", "30"], hits: ["", "", ""] },
  { location: ["32", "33", "34"], hits: ["", "", ""] },
  { location: ["63", "64", "65"], hits: ["", "", ""] }
];