import gameBoard from '../js/components/game-board.js';
import tokens from '../js/components/tokens.js'

window.onload = () => {
  gameBoard
    .drawFrame()
    .drawBoard()
    .drawHome()
    .drawSupermarket();

  tokens.forEach((token) => {
    token.drawToken();
  });
};
