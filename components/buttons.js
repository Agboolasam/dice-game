import { diceValue, justFunction } from "./dice.js";
let playBtnFun = function(element) {
    element.parentElement.parentElement.innerHTML = `
  <div id="game" >
  <div class="dice"></div>
  <div class="dice"></div>
  <div style=" grid-area: button;">
  <button id="roll" onclick="rollLoaded()">
   roll
  </button>
  </div>   
  `;
    console.log("triggered");
};

let rollBtn = window.addEventListener(
    "DOMContentLoaded",
    function(element, value) {
        element.innerHTML = diceValue(value);
    }
);

export { playBtnFun, rollBtn };