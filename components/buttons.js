import { diceValue, justFunction } from "./dice.js";

// function to get the die values after roll
let rollBtn = function (element, value) {
  element.innerHTML = diceValue(value);
};

export { rollBtn, justFunction };
