export default class Npc {
  protected x: number;
  protected y: number;
  protected health: number;
  protected type: string;
  protected id: string;

  constructor(x: number, y: number, type: string, id: string) {
    this.x = x;
    this.y = y;
    this.health = 100;
    this.type = type;
    this.id = id;
  }

  setHealth(health: number): void {
    this.health = health;
  }
}
