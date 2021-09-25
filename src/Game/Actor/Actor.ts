import { Vec } from "../Vec/Vec";
import { Sprite } from "./Sprite";

export abstract class Actor {
  public pos!: Vec;
  public sprite!: Sprite;

  public draw(): void {}

  public update(): void {}
}
