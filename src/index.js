import "./reset.css";
import "./styles.css";
const Ship = require("./ship");

class Gameboard {
  constructor(x, y) {
    const coords = [];
    for (let i = 1; i <= x; i++) {
      coords[i] = [];
      for (let j = 1; j <= y; j++) {
        coords[i][j] = 0;
      }
    }
  }
  placeShip(x, y) {
    const newShip = new Ship(2);
  }
  receiveAttack(x, y) {}
}

console.log("TEST2");
