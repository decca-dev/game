import { Graphics, Player, Npc, Vec } from "./Classes";
import { PLAYER, NPC } from "./Utils/Constants";
import { move } from "./Utils/Move";
import { char } from "./Types/CharType";
import readline from "readline";

const stdin = process.stdin.setRawMode(true);
readline.emitKeypressEvents(stdin);

const board = new Graphics();

let px = Math.floor(Math.random() * 15);
let py = Math.floor(Math.random() * 8);

const player = new Player(px, py, "Knight");

const playerVec = new Vec(player.x, player.y);

board.setPixel(playerVec, PLAYER);

console.log(board.render());

stdin.on("keypress", (str, key) => {
  if (key && key.ctrl && key.name === "c") process.exit();
  if (["u", "d", "l", "r"].includes(key.name[0])) {
    let str: char = key.name[0];

    const oldIndex = playerVec.y * 15 + playerVec.x;

    const newIndex = move(oldIndex, str);

    board.movePixel(oldIndex, newIndex, playerVec);

    console.log(board.render());
  }
});
