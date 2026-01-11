import { Gameboard } from "../classes/gameboard";

test("Check if ship is hit", () => {
  const gameboard = new Gameboard();

  gameboard.shipFormation(0, 0, 2);

  expect(gameboard.receiveAttact(0, 0)).toBeTruthy();
});

test("Check if ship is not hit", () => {
  const gameboard = new Gameboard();

  gameboard.shipFormation(0, 0, 2);

  expect(gameboard.receiveAttact(0, 1)).toBeFalsy();
});

test("Check if ship is not hit", () => {
  const gameboard = new Gameboard();

  gameboard.shipFormation(0, 0, 2);

  expect(gameboard.receiveAttact(1, 1)).toBeFalsy();
});

test("Check multiple ship formation", () => {
  const gameboard = new Gameboard();

  gameboard.shipFormation(0, 0, 2, "vertical");
  gameboard.shipFormation(2, 1, 2);

  expect(gameboard.receiveAttact(3, 1)).toBeTruthy();
});

test("Check multiple ship formation", () => {
  const gameboard = new Gameboard();

  gameboard.shipFormation(0, 0, 2, "vertical");
  gameboard.shipFormation(2, 1, 2);

  expect(gameboard.receiveAttact(3, 2)).toBeFalsy();
});
