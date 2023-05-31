"use strict";
// interface for class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    // нужно еще раз явно прописать тип number
    go(speed) {
        console.log("go!", speed.toFixed());
    }
    stop() {
        console.log("stop");
    }
}
exports.Car = Car;
const car = new Car;
// interface for class
