//getters setters
export class Rectangle {
  constructor(public width: number, public height:number) {
  }
  get area(): number {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(12, 6)
// rect1.area();

export class Car {
  constructor(public color: string, private  _maxSpeed: number) {}
  //  _ говорит что мы не можем менять это поле
  get speed():number {
    return this._maxSpeed;
  }
  set maxSpeed(speed: number) {
    if (speed > 0) this._maxSpeed = speed;
  }
}

const c1 = new  Car("green", 2254);
c1.color = "grey";
c1.maxSpeed = 0;
//getters setters