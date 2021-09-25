export class Vec {
  public x: number;
  public y: number;

  constructor(x: number, y: number);

  constructor();

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
