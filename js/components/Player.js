import Person from './Person.js';

class Player extends Person {
  constructor(name, xCoord, yCoord, color, hasShopping) {
    super(name, xCoord, yCoord, color, hasShopping);
    this.color = '#5BFFFF';
    this.hasShopping = false;
  }

  get xPosition() {
    return this.xCoord;
  }

  get yPosition() {
    return this.yCoord;
  }

  moveToken(direction) {
    switch (direction) {
      case 'up':
        this.token.animate(100, 10, 'now').dy(-30);
        break;
      case 'left':
        this.token.animate(100, 10, 'now').dx(-30);
        break;
      case 'down':
        this.token.animate(100, 10, 'now').dy(30);
        break;
      case 'right':
        this.token.animate(100, 10, 'now').dx(30);
        break;
      // no default
    }
    this.xCoord = this.token.cx();
    this.yCoord = this.token.cy();
    this.checkShopDistance();
    if (this.hasShopping === true) {
      this.checkHomeDistance();
    }
  }

  checkShopDistance() {
    if (this.xCoord >= 225
      && this.yCoord <= 75) {
      this.pickUpShopping();
    }
  }

  pickUpShopping() {
    this.hasShopping = true;
    this.token.attr({ fill: '#80FF00' });
  }

  checkHomeDistance() {
    if (this.yCoord >= 240
      && this.xCoord <= 30) {
      alert('winner!')
    }
  }
}

export default Player;