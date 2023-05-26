"use strict";
// arrays
const numbers = [1, 2, 3, 4];
const cars = ['bmw', "audi"];
const users = ['nikolai', "sasha"];
let newArr = users.push("ivan");
//  newArr.push(1); // error
console.log(newArr);
;
let carsForMy = [];
carsForMy.push({ wheels: 2, brand: "Lada" });
// TS хранит сведенья об всех наших интерфейсах во всем проекте
const arrayOfArray = [];
arrayOfArray.push(["car", "apple"]);
// push'ыть смогу только строки, на другое будет ругаться
function printArray(arr) {
    arr.toString();
}
printArray(["121", "car"]);
