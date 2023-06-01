// abstract class
abstract class Vehicle {
  abstract color: string;
  // не говорим о реализации просто описываем сигнатуру
  abstract drive(speed: number): void;
  public stop() {
    console.log("stopped");
  }
}
export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }
  drive(speed: number) {
    console.log(speed)
  }
}
// const v1 = new Vehicle();
// abstract class