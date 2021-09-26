import { Vec } from "../Vec/Vec";
import { Sprite } from "./Sprite";

export abstract class Actor {
  public pos: Vec;
  public sprite!: Sprite;

  constructor(sprite: Sprite) {
    this.pos = new Vec();
  }

  public draw(): void {}

  public update(): void {}
}
