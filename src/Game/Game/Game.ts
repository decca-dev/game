import { pixel, GraphicsOptions } from "../typings/graphics";
import { Graphics } from "../Graphics/Graphics";
import { GameOptions } from "../typings/game";

export class Game {
  public gfx: Graphics;

  constructor({ background, width, height }: GraphicsOptions & GameOptions) {
    this.gfx = new Graphics({ width, height, background });
  }

  public render(): string {}
}
