export class Player {
  protected x: number;
  protected y: number;
  protected health: number;
  protected playerClass: string;
  protected inventory: string[];

  constructor(x: number, y: number, playerClass: string) {
    this.x = x;
    this.y = y;
    this.health = 100;
    this.playerClass = playerClass;
    this.inventory = [];
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
