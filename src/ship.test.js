const Ship = require("./ship");

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test("hits work correctly", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("checks if ship is sunk", () => {
    let index = ship.length;
    while (index > 0) {
      index--;
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });

  test("checks if ship is not sunk", () => {
    expect(ship.isSunk()).toBe(false);
  });
});
