import { Ship } from "../classes/ship";

const hShip = new Ship(3, { x: 0, y: 0 }, "horizontal");
const vShip = new Ship(3, { x: 0, y: 0 }, "vertical");

test("Hit a ship at origin", () => {
  const ship = new Ship(3, { x: 0, y: 0 });
  expect(ship.hit(0, 0)).toBeTruthy();
});

test("Hit a ship at horizontal", () => {
  expect(hShip.hit(1, 0)).toBeTruthy();
});

test("Hit a ship at vertical", () => {
  expect(vShip.hit(0, 1)).toBeTruthy();
});

test("Miss a ship at vertical", () => {
  expect(vShip.hit(1, 0)).toBeFalsy();
});

test("Miss a ship at horizontal", () => {
  expect(hShip.hit(0, 1)).toBeFalsy();
});

test("Check horizontal boundary for invalid positions", () => {
  expect(hShip.hit(-1, 0)).toBeFalsy();
});

test("Check vertical boundary for invalid positions", () => {
  expect(vShip.hit(0, -1)).toBeFalsy();
});

test("Check ship is sunk", () => {
  const sunkenShip = new Ship(2, { x: 0, y: 0 }, "horizontal");

  sunkenShip.hit(0, 0);
  sunkenShip.hit(1, 0);
  expect(sunkenShip.isSinking()).toBeTruthy();
});
