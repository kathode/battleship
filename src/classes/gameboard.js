import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.ships = [];
    this.hits = [];
    this.missedhits = [];
  }

  shipFormation(x, y, length, orientation = "horizontal") {
    this.ships.push(new Ship(length, { x, y }, orientation));
  }

  receiveAttact(x, y) {
    const shipHit = this.ships.find((ship) => ship.hit(x, y));

    if (shipHit) {
      this.hits.push({ x, y });
    } else {
      this.missedhits.push({ x, y });
    }

    return shipHit;
  }

  isGameover() {
    if (this.ships.length === this.ships.filter((ship) => ship.isSunk).length) {
      return true;
    }

    return false;
  }
}
