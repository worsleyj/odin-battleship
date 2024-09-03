import "./reset.css";
import "./styles.css";
const Ship = require("./ship");

class Gameboard {
  constructor(x, y) {
    const coords = [];
    this.coords = coords;
    for (let i = 1; i <= x; i++) {
      coords[i] = [];
      for (let j = 1; j <= y; j++) {
        coords[i][j] = 0;
      }
    }
  }
  placeShip(x, y) {
    const newShip = new Ship(1);
    this.coords[y][x] = newShip;
  }
  receiveAttack(x, y) {
    if (this.coords[y][x] === 0) {
      console.log("You Missed! X: " + x + ", Y: " + y);
    } else {
      this.coords[y][x].hit();
    }
  }
}

const board = new Gameboard(5, 5);
console.log(board.coords);
board.placeShip(3, 4);
board.receiveAttack(3, 4);
board.receiveAttack(4, 3);
console.log(board.coords);
console.log(board.coords[4][3].isSunk());

console.log("TEST2");
