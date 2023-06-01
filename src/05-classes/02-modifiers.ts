// // modifiers
// interface ICar {
//   go(speed: number): void,
// }
// export class Vehicle {
//
//   constructor(private createdAt: Date) {
//     super(createdAt)
//   }
//   public drive(speed: number) {
//     this.log(speed)
//     console.log("go!", speed.toFixed())
//   }
//
//   public stop() {
//     console.log("stop")
//   }
//   private log(speed: number) {
//     console.log(speed, this.createdAt)
//   }
//   protected oneMoreLog(text: string) {
//     console.log(text.toUpperCase())
//   }
// }
// class Car extends Vehicle {
//   public changeSpeed(speed: number) {
//     this.drive(speed);
//     // this.log(33)
//
//   }
// };
// const car1 = new Car;
// car1.drive(23)
// car1.stop()
// car1.changeSpeed(30)
// // public - тоже самое что отсутствие модификатора
// // private - Если же к свойствам и методам
// // применяется модификатор private, то к ним нельзя будет обратиться извне при создании объекта данного класса.
// // protected запрет напрямую вызывать инстенс, Модификатор protected определяет поля и методы,
// // которые из вне класса видны только в классах-наследниках:
//
// // !модификаторы не действуют в ран-тайме!
// // constructor
// export class NewCar extends Vehicle {
//   // public color: string;
//   // public maxSpeed: number;
//
//   // color: string = "black";
//   // color!: string,
//   constructor(public readonly color: string, public maxSpeed: number) {
//     super(new Date());
//
//     // this.color = color;
//     // this.maxSpeed = maxSpeed;
//   }
// }
//
// const newCar1 = new NewCar("red", 220)
// // err because readonly
// // newCar1.color = "blue"
// console.log(newCar1.color.toUpperCase());
//
// Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод
// log недоступным для инстансов обоих классов.

  export class Rectangle {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
    this.log();
  }

  area() {
    return this.height * this.width;
  }

  private log():void {
    console.log(`new Rectangle was create at ${new Date()}`)
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
    this.width = width;
    this.color = color;
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}

// // constructor
// // modifiers
