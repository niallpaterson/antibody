import gameBoard from './game-board.js';

class Person {
  constructor(name, xCoord, yCoord, moveUp, moveDown, moveLeft, moveRight) {
    this.name = name;
    this.token = null;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.moveRight = false;
    this.moveLeft = false;
    this.moveUp = false;
    this.moveDown = false;
  }

  drawToken() {
    this.token = gameBoard.svgFrame
      .circle(15)
      .center(this.xCoord, this.yCoord)
      .attr({
        fill: this.color,
      });
    return this;
  }

  get currentX() {
    return this.token.cx();
  }

  get currentY() {
    return this.token.cy();
  }

  moveToken(direction) {
    switch (direction) {
      case 'up':
        this.token.animate(15, 0, 'now').ease('-').dy(-1.5);
        break;
      case 'left':
        this.token.animate(15, 0, 'now').ease('-').dx(-1.5);
        break;
      case 'down':
        this.token.animate(15, 0, 'now').ease('-').dy(1.5);
        break;
      case 'right':
        this.token.animate(15, 0, 'now').ease('-').dx(1.5);
        break;
      // no default
    }
    return this;
  }
}

export default Person;
