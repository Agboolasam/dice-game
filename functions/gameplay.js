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

    default:
      break;
  }
}

export default showPlayer;
