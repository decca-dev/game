import { pixel } from "../typings/graphics";

export class Game {
  public frameBuffer!: any;
  public width!: number;
  public height!: number;

  public setPixel(x: number, y: number, v: pixel): void {}

  public render(): void {}

  public reset(): void {}
}
