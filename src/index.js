import "./reset.css";
import "./styles.css";
const Ship = require("./ship");

const ship = new Ship(1);
ship.hit();
ship.hit();
ship.hit();
ship.hit();
ship.hit();
console.log(ship);
console.log(ship.isSunk());

console.log("TEST2");
