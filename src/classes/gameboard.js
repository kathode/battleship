import { createElement } from "../helpers";
import { Ship } from "./ship";

export class Gameboard {
  constructor(isPlayer) {
    this.isPlayer = isPlayer;
    this.ships = [];
    this.hits = [];
    this.missedhits = [];
  }

  shipFormation(x, y, length, orientation = "horizontal") {
    this.ships.push(new Ship(length, { x, y }, orientation));

    if (this.isPlayer) {
      for (let i = 0; i < length; i++) {
        if (orientation === "horizontal") {
          const cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"][data-player="${this.isPlayer}"]`);
          cell.className = "ship-position";
        }
        if (orientation === "vertical") {
          const cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"][data-player="${this.isPlayer}"]`);
          cell.className = "ship-position";
        }
      }
    }
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

  render() {
    const content = document.getElementById("content");
    const divs = [];
    let yAxis = 1;

    // create gameboard cell ui with js
    for (let x = 1; x <= 100; x++) {
      const xPosition = (x % 10 === 0 ? 10 : x % 10) - 1;
      const yPosition = yAxis - 1;

      const cell = createElement("div");
      cell.setAttribute("data-action", "cell");
      cell.setAttribute("data-player", this.isPlayer);
      cell.setAttribute("data-x", xPosition);
      cell.setAttribute("data-y", yPosition);

      if (x % 10 === 0) {
        yAxis++;
      }

      divs.push(cell);
    }

    const gameboard = createElement("div", { className: "gameboard" }, ...divs);
    content.append(gameboard);
  }
}
