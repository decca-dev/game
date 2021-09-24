export class Npc {
  public x: number;
  public y: number;
  protected health: number;
  public type: string;
  public id: string;

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
