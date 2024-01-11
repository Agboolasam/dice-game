let playBtnFun = function(element) {
    element.parentElement.parentElement.innerHTML = `
  <div id="game">
  <div class="dice"></div>
  <div class="dice"></div>
  <div class="roll">
    roll
    
  </div>   
  `;
    console.log("triggered");
};
let justFunction = () => {
    console.log("jus triggered");
};
export { playBtnFun, justFunction };