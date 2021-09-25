import { pixel, GraphicsOptions } from "../typings/graphics.js";
import { Vec } from "../Vec/Vec.js";

export class Graphics {
  public readonly width: number;
  public readonly height: number;
  private readonly _frame: pixel[];

  constructor({ width, height, background }: GraphicsOptions) {
    this.width = width;
    this.height = height;
    this._frame = new Array(width * height).fill(background);
  }

  public setPixel(loc: Vec) {}
}
