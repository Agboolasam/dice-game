import { rollBtn } from "./components/buttons.js";
import * as random from "./components/randomvalue.js";

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
  rollBtn(document.getElementById("dice1"), random.value1);
  rollBtn(document.getElementById("dice2"), random.value2);
});
