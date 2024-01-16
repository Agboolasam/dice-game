import { rollBtn } from "./functions/buttons.js";
import * as random from "./functions/randomvalue.js";
let diceSound = new Audio("./media/sound-1.mp3");

window.addEventListener("DOMContentLoaded", () => {
  // switch to game interface and then give a random value to the game at first
  document.getElementById("play-btn").addEventListener("click", (e) => {
    let elem = e.target;
    document.getElementById("game").style.visibility = "visible";
    elem.parentElement.style.display = "none";
    random.genNum();
    rollBtn(document.getElementById("dice1"), random.value1);
    rollBtn(document.getElementById("dice2"), random.value2);
  });
});

// click event for the button
document.getElementById("roll").addEventListener("click", () => {
  random.genNum();
  // play sound
  diceSound.play();
  rollBtn(document.getElementById("dice1"), random.value1);
  rollBtn(document.getElementById("dice2"), random.value2);
});
