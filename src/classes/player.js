import { Gameboard } from "./gameboard";

export class Player {
  constructor(player) {
    this.gameboard = new Gameboard(player);
  }
}
