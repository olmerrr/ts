"use strict";
// infer
function fromPairFn(pair) {
    const [key, value] = pair;
    return {
        [key]: value
    };
}
// infer - позволяет вытянуть какой то тип из существующей структуры
const myNewPair = ["myKey", "myValue"];
class Computer {
    constructor(brand) { }
}
let brand = "";
let dateArg;
// infer
