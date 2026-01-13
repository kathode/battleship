import { Player } from "./classes/player.js";
import DOMActions from "./script/dom-action-manager.js";
import "./styles.css";

const player = new Player(true);
player.gameboard.render();
player.gameboard.shipFormation(0, 0, 3);
player.gameboard.shipFormation(6, 9, 3);
player.gameboard.shipFormation(5, 5, 3);
player.gameboard.shipFormation(5, 6, 3, "vertical");

const computer = new Player(false);
computer.gameboard.render();
computer.gameboard.shipFormation(0, 0, 3);
computer.gameboard.shipFormation(6, 9, 3);
computer.gameboard.shipFormation(2, 3, 3);
computer.gameboard.shipFormation(5, 5, 3);
computer.gameboard.shipFormation(5, 6, 3, "vertical");

DOMActions.register("cell", ({ trigger }) => {
  // coordinates of ships for gameboards
  const x = Number(trigger.getAttribute("data-x"));
  const y = Number(trigger.getAttribute("data-y"));
  const isPlayerGameboard = trigger.getAttribute("data-player") === "true";

  // restrict player to attack only computer gameboard
  if (!isPlayerGameboard) {
    const hit = player.gameboard.receiveAttact(x, y);
    if (hit) {
      trigger.textContent = "0";
      computerSimulation();
    } else {
      trigger.textContent = "x";
      computerSimulation();
    }
  }
});

// normal gameplay:
// user selects where to position battleships

// user takes a turn then computer takes a turn and repeats until someone wins

// loop through each player until winner is found
// code computer player
// use player.gameboard.isGameover() // computer.gameboard.isGameover()

DOMActions.initAutoBinder();
