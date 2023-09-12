const bigBox = document.querySelector(".box1-main");
const bigBox2 = document.querySelector(".box2-main");
const popUp = document.querySelector(".pop-up");
const winnerBox = document.querySelector(".box-pop-up_top");
const winnerButton = document.querySelector(".box-pop-up_button");
const player1Points = document.querySelector(".player1-points");
const player2Points = document.querySelector(".player2-points");
const muteBox = document.querySelector(".mute-box");

const player1 = [];
const player2 = [];
const ships = [
  1, 2, 3, 15, 22, 29, 34, 35, 12, 19, 24, 31, 21, 17, 46, 47, 7, 49, 43,
];
const ships2 = [
  2, 3, 4, 6, 16, 17, 18, 20, 21, 29, 36, 43, 38, 45, 33, 47, 49, 7, 35,
];
const ships3 = [
  49, 42, 35, 6, 13, 20, 33, 40, 47, 11, 4, 1, 2, 15, 16, 29, 31, 43, 45,
];
const ships4 = [
  1, 2, 22, 29, 15, 43, 44, 45, 31, 24, 17, 4, 5, 14, 21, 35, 33, 49, 47,
];
const allArr = [ships, ships2, ships3, ships4];

const randomArr = Math.floor(Math.random() * 5);
const shipsSchema = [
  [0, 1],
  [2, 1],
  [3, 0],
  [3, 1],
  [0, 2],
];
const currentCombination = shipsSchema[randomArr];
const player1Arr = allArr[currentCombination[0]];
const player2Arr = allArr[currentCombination[1]];

const audio1 = new Audio("mp1_1.mp3");
const audio2 = new Audio("mp1_3.mp3");
let mute = true;

muteBox.addEventListener("click", () => {
  mute = !mute;
  muteBox.classList.toggle("mute-gray");
});
bigBox.addEventListener("click", (event) => {
  const id = +event.target.id;
  if (player1Arr.includes(id)) {
    event.target.classList.add("green");
    player1.push(event.target.id);

    const parag = document.createElement("p");
    const nodet = document.createTextNode(`player 1 points: ${player1.length}`);
    parag.appendChild(nodet);
    player1Points.replaceChildren(parag);
    if (mute) {
      audio1.play();
    }
  } else {
    event.target.classList.add("gray");
  }
  if (player1.length === 19) {
    const para = document.createElement("p");
    const node = document.createTextNode("Player 1 won!");
    para.appendChild(node);
    winnerBox.appendChild(para);
    popUp.classList.toggle("hidden");
    if (mute) {
      audio2.play();
    }
  }
});
bigBox2.addEventListener("click", (event) => {
  const id = +event.target.id;
  if (player2Arr.includes(id)) {
    event.target.classList.add("green");
    player2.push(event.target.id);
    const parag = document.createElement("p");
    const nodet = document.createTextNode(`player 2 points: ${player2.length}`);
    parag.appendChild(nodet);
    player2Points.replaceChildren(parag);
    if (mute) {
      audio1.play();
    }
  } else {
    event.target.classList.add("gray");
  }
  if (player2.length === 19) {
    const para = document.createElement("p");
    const node = document.createTextNode("Player 2 won!");
    para.appendChild(node);
    winnerBox.appendChild(para);
    popUp.classList.toggle("hidden");
    if (mute) {
      audio2.play();
    }
  }
});
winnerButton.addEventListener("click", () => {
  location.reload();
});
