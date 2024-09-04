const Ship = require("./ship");

class Gameboard {
  constructor(x, y) {
    this.coords = [];
    this.ships = [];
    for (let i = 1; i <= x; i++) {
      this.coords[i] = [];
      for (let j = 1; j <= y; j++) {
        this.coords[i][j] = 0;
      }
    }
  }
  placeShip(y, x) {
    const newShip = new Ship(1);
    this.ships.push(newShip);
    this.coords[y][x] = newShip;
  }
  receiveAttack(y, x) {
    if (this.coords[y][x] === 0) {
      this.coords[y][x] = "X";
      console.log("You Missed! X: " + x + ", Y: " + y);
    } else {
      this.coords[y][x].hit();
    }
  }
  isGameOver() {
    let allShipsSunk = true;
    this.ships.forEach((ship) => {
      if (!ship.isSunk()) {
        allShipsSunk = false;
      }
      console.log("AllSunk?" + allShipsSunk);
    });
  }
}

module.exports = Gameboard;
