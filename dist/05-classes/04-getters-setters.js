"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Rectangle = void 0;
//getters setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
const rect1 = new Rectangle(12, 6);
// rect1.area();
class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    //  _ говорит что мы не можем менять это поле
    get speed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
exports.Car = Car;
const c1 = new Car("green", 2254);
c1.color = "grey";
c1.maxSpeed = 0;
//getters setters
