import { Vec } from "./Vec";
import { char } from "../Types/CharType";
import { EMPTY_SPACE, PLAYER, NPC } from "../Utils/Constants";
import { swapElments } from "../Utils/Functions";

export class Graphics {
  private _width: number;
  private _height: number;
  public frame: char[];

  constructor() {
    this._width = 15;
    this._height = 8;
    this.frame = new Array(this._width * this._height).fill("⬜");
  }

  public setPixel(pos: Vec, val: char): void {
    const index = pos.y * this._width + pos.x;
    if (this.frame[index] !== EMPTY_SPACE) {
      let takenBy = this.frame[index] === PLAYER ? "Player" : "Npc";
      return console.log(`That place is already taken by ${takenBy}!`);
    } else {
      this.frame[index] = val;
    }
  }

  public movePixel(oldIndex: number, newIndex: number): void {
    if (this.frame[oldIndex] === EMPTY_SPACE) {
      return console.log("Old index pixel cannot be an empty space!");
    } else if (this.frame[newIndex] !== EMPTY_SPACE) {
      return console.log("You cannot move to a pixel taken by an entity!");
    }

    swapElments(this.frame, oldIndex, newIndex);
  }

  public render(): string {
    let frame = "";

    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        frame += this.frame[y * this._width + x];
      }
      frame += "\n";
    }

    return frame;
  }
}
