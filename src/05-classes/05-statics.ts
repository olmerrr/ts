// // statics
// export class Circle {
//   constructor(private radius: number) {}
//   get area() {
//     return Circle.pi * this.radius * this.radius;
//   }
//   protected static pi: number = 3.14;
//
//   private calculateArea(radius: number) {
//     return this.pi * radius * radius;
//   }
// }
//
// const c1 = new Circle(20);
// c1.radius.toFixed();
// c1.area
// // private - запрещает использ вне классов
// // Circle.pi;
// // Circle.calculateArea(12);
//
// class Ellipse extends  Circle {
//   constructor(public radius: number) {
//     super(radius);
//     // Circle.pi()
//   }
// }

export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value:number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}
const temp0= Temperature.fromFahrenheit(72);
const temp = new Temperature(25);
temp.fahrenheit = 33;
// // statics
