import gameBoard from './game-board.js';

class Person {
  constructor(name, xCoord, yCoord, color) {
    this.name = name;
    this.token = null;
    this.color = '#86026F';
    this.xCoord = xCoord;
    this.yCoord = yCoord;
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
        this.token.animate(250, 0, 'now').ease('-').dy(-15);
        break;
      case 'left':
        this.token.animate(250, 0, 'now').ease('-').dx(-15);
        break;
      case 'down':
        this.token.animate(250, 0, 'now').ease('-').dy(15);
        break;
      case 'right':
        this.token.animate(250, 0, 'now').ease('-').dx(15);
        break;
      // no default
    }
    return this;
  }
}

export default Person;
