import "./reset.css";
import "./styles.css";
const Ship = require("./ship");
const Gameboard = require("./Gameboard");

const board = new Gameboard(5, 5);
console.log(board.coords);
board.placeShip(4, 3);
board.receiveAttack(3, 4);
board.receiveAttack(4, 3);
console.log(board.coords);
console.log(board.coords[4][3].isSunk());
board.isGameOver();
console.log("TEST2");
