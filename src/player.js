const Gameboard = require("./Gameboard");

class Player {
  constructor(type) {
    this.type = type;
    this.board = new Gameboard(5, 5);
  }
}

const humanPlayer = new Player("human");
const computerPlayer = new Player("computer");
