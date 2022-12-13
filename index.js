let computer = document.querySelector("#computer");
let player = document.querySelector("#player");
let events = document.querySelectorAll(".images button");
let array = [];
let selection = "";
let compSelection = "";
let playerPoints = 0;
let compPoints = 0;
let playerId = document.querySelector("#playId");
let compId = document.querySelector("#compId");
computer.innerHTML = "Computer";
player.innerHTML = "Player";

//creating new array of selections
for (let i = 0; i < events.length; i++) {
  array.push(events[i].innerHTML);
}

//random selection from created array for computer
function one() {
  let one = array[Math.floor(Math.random() * array.length)];
  return one;
}

//player win function
function playerWin() {
  playerPoints++;
  playerId.innerHTML = `Player points: ${playerPoints}`;
}

//computer win function
function compWin() {
  compPoints++;
  compId.innerHTML = `computer points: ${compPoints}`;
}

//function for Rock
function RockSelected() {
  selection += "Rock";
  const result = one();
  compSelection += result;
  computer.innerHTML = `Computer selected ${compSelection}`;
  player.innerHTML = `Player selected ${selection}`;
  if (selection == compSelection) {
    document.querySelector(".abc").textContent = "its a draw";
  } else if (compSelection == "Lizards" || compSelection == "Scissors") {
    playerWin();
    document.querySelector(".abc").textContent = "player wins";
  } else {
    compWin();
    document.querySelector(".abc").textContent = "computer wins";
  }
  selection = "";
  compSelection = "";
}

//
function PaperSelected() {
  selection += "Paper";
  const result = one();
  compSelection += result;
  computer.innerHTML = `Computer selected ${compSelection}`;
  player.innerHTML = `Player selected ${selection}`;
  if (selection == compSelection) {
    document.querySelector(".abc").textContent = "its a draw";
  } else if (compSelection == "Rock") {
    playerWin();
    document.querySelector(".abc").textContent = "player wins";
  } else {
    console.log("Player lose!");
    compWin();
    document.querySelector(".abc").textContent = "computer wins";
  }
  selection = "";
  compSelection = "";
}

//
function ScissorsSelected() {
  selection += "Scissors";
  const result = one();
  compSelection += result;
  computer.innerHTML = `Computer selected ${compSelection}`;
  player.innerHTML = `Player selected ${selection}`;
  if (selection == compSelection) {
    document.querySelector(".abc").textContent = "its a draw";
  } else if (
    compSelection == "Lizards" ||
    compSelection == "Paper" ||
    compSelection == "Spock"
  ) {
    playerWin();
    document.querySelector(".abc").textContent = "player wins";
  } else {
    compWin();
    document.querySelector(".abc").textContent = "computer wins";
  }
  selection = "";
  compSelection = "";
}

//
function LizardsSelected() {
  selection += "Lizards";
  const result = one();
  compSelection += result;
  computer.innerHTML = `Computer selected ${compSelection}`;
  player.innerHTML = `Player selected ${selection}`;
  if (selection == compSelection) {
    document.querySelector(".abc").textContent = "its a draw";
  } else if (compSelection == "Paper") {
    playerWin();
    document.querySelector(".abc").textContent = "player wins";
  } else if (
    compSelection == "Rock" ||
    compSelection == "Spock" ||
    compSelection == "Scissors"
  ){
    compWin();
    document.querySelector(".abc").textContent = "computer wins";
  }
  selection = "";
  compSelection = "";
}

//
function SpockSelected() {
  selection += "Spock";
  const result = one();
  compSelection += result;
  computer.innerHTML = `Computer selected ${compSelection}`;
  player.innerHTML = `Player selected ${selection}`;
  if (selection == compSelection) {
    document.querySelector(".abc").textContent = "its a draw";
  } else if (compSelection == "Paper" || compSelection == "Lizards") {
    playerWin();
    document.querySelector(".abc").textContent = "player wins";
  } else if (compSelection == "Rock" || compSelection == "Scissors") {
    compWin();
    document.querySelector(".abc").textContent = "computer wins";
  }
  selection = "";
  compSelection = "";
}


playerId.innerHTML = `Player points: ${playerPoints}`;
compId.innerHTML = `computer points: ${compPoints}`;
