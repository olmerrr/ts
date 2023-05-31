// interface for class

interface ICar {
  go(speed: number): void,
}
export class Car implements ICar {
  // нужно еще раз явно прописать тип number
  go(speed: number) {
    console.log("go!", speed.toFixed())
  }

  stop() {
    console.log("stop")
  }
}
const car = new Car;
// interface for class
