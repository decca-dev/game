import { pixel, GraphicsOptions } from "../typings/graphics.js";
import { Vec } from "../Vec/Vec.js";

export class Graphics {
  public readonly width: number;
  public readonly height: number;
  private readonly _frameSize: number;
  private readonly _frame: pixel[];

  constructor({ width, height, background }: GraphicsOptions) {
    this.width = width;
    this.height = height;
    this._frameSize = width * height;
    this._frame = new Array(this._frameSize).fill(background);
  }

  public setPixel(loc: Vec, val: pixel): void {
    const i = loc.y * this.width + loc.x;

    if (i >= 0 && i < this._frameSize) this._frame[i] = val;
  }

  public render(): string {}

  public newFrame(): void {}
}

// 1000ms
// i'll be back soon k
// i'll be gone soon
// so cya
// make sure to save
