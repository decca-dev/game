import { Vec } from "./Vec";
import { char } from "../Types/CharType";

export class Graphics {
  private _width: number;
  private _height: number;
  public readonly frame: char[];

  constructor() {
    this._width = 15;
    this._height = 8;
    this.frame = new Array(this._width * this._height).fill("⬜");
  }

  public setPixel(pos: Vec, val: char) {
    this.frame[pos.y * this._width + pos.x] = val;
  }

  public render() {
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
