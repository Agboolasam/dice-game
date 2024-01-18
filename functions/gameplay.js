import { score } from "./randomvalue.js";

function showPlayer(rollcount) {
  switch (rollcount) {
    case 0:
      return `
        PLAYER ONE TO PLAY
        `;
    case 1:
      return `
      PLAYER TWO TO PLAY
        `;
    case 2:
      if (players[0].score > players[1].score) {
        return `Player1 wins
              Play again
              `;
      } else if (players[0].score < players[1].score) {
        return `Player2 wins
              Play again
              `;
      } else {
        return `Draw !!!
              Play again
              `;
      }

    default:
      break;
  }
}

let players = [
  {
    tag: "Player1",
    score,
  },
  {
    tag: " Player2",
    score,
  },
];

function setScore(count) {
  if (count > 0) {
    players[count - 1].score = score;
    document.getElementById(`player${count}`).innerHTML = `Player ${count}: ${
      players[count - 1].score
    }`;
  }
}

function reset() {
  let init = 0;
  players[0].score = init;
  players[1].score = init;

  document.getElementById(
    "player1"
  ).innerHTML = `Player 1: ${players[0].score} `;
  document.getElementById(
    "player2"
  ).innerHTML = `Player 2: ${players[1].score}`;
}

export { showPlayer, players, setScore, reset };
