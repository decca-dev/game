import { Graphics, Player, Npc, Vec } from "./Classes";
import { PLAYER, NPC } from "./Utils/Constants";

const board = new Graphics();

// let px = Math.floor(Math.random() * 15);
// let py = Math.floor(Math.random() * 8);

let px = 6;
let py = 5;

const player = new Player(px, py, "Knight");

const playerVec = new Vec(player.x, player.y);

board.setPixel(playerVec, PLAYER);

console.log(board.render());

const old = py * 15 + px;
const newIndex = py * 15 + (px + 1);

board.movePixel(old, newIndex);

console.log(board.render());

// let nx = Math.floor(Math.random() * 15);
// let ny = Math.floor(Math.random() * 8);

// const npc = new Npc(nx, ny, "Thief", "000");

// const npcVec = new Vec(npc.x, npc.y);

// board.setPixel(npcVec, NPC);
