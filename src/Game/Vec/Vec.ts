export class Vec {
  public x: number;
  public y: number;

  constructor(x: number, y: number);
  constructor();
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public add(vec: Vec): this {
    this.x += vec.x;
    this.y += vec.y;

    return this;
  }

  public sub(vec: Vec): this {
    this.x -= vec.x;
    this.y -= vec.y;

    return this;
  }

  public mul(vec: Vec): this {
    this.x *= vec.x;
    this.y *= vec.y;

    return this;
  }

  public div(vec: Vec): this {
    this.x /= vec.x;
    this.y /= vec.y;

    return this;
  }

  public neg(): this {
    this.x = -this.x;
    this.y = -this.y;

    return this;
  }

  public abs(): this {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);

    return this;
  }
}
