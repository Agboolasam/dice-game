import { playBtnFun, justFunction } from "./components/buttons.js";

document.getElementById("play-btn").addEventListener("click", (e) => {
    let elem = e.target;
    playBtnFun(elem);
});

justFunction();