import { rollBtn } from "./functions/buttons.js";
import * as random from "./functions/randomvalue.js";
import { showPlayer, players, setScore, reset } from "./functions/gameplay.js";
let diceSound = new Audio("./media/sound-1.mp3");
let counter = 0;

// player control

function player() {
  setTimeout((count) => {
    document.getElementById("set-player").innerHTML = showPlayer(counter);
    document.getElementById("blurout").style.visibility = "visible";
  }, 200);
}

window.addEventListener("DOMContentLoaded", () => {
  // switch to game interface and then give a random value to the game at first
  document.getElementById("play-btn").addEventListener("click", (e) => {
    player(counter);
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
  // reset counter
  if (counter >= 2) {
    counter--;
  } else {
    counter++;
  }
  setScore(counter);
  player(counter);
  console.log(players[counter - 1].score);
});

document.getElementById("roll").addEventListener("DOMContentLoaded", () => {
  document.getElementById("blurout").style.visibility = "visible";
});

document.getElementById("set-player").addEventListener("click", () => {
  document.getElementById("blurout").style.visibility = "collapse";
  //to reset the game
  if (counter == 2) {
    reset();
  }
});
