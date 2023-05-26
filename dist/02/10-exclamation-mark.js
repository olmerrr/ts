"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNameInUSA = exports.printName = void 0;
// exclamation-mark -  утверждение, говорит о том что я уеждаю TS что я знаю что там будут данные
let word = null;
const num = 10;
if (num > 5) {
    word = "Hello Yaroslav";
}
// знак ! говорит мы точно знаем что там будет значение
console.log(word.toUpperCase());
// console.log(word.toUpperCase() as string);
// console.log(word?.toUpperCase());
// @ts-ignore
function printName(name) {
    // знак ! говорит мы точно знаем что там будет значение
    const fullName = name;
    // const fullName: string = name || "";
}
exports.printName = printName;
function printNameInUSA(person) {
    console.log(person === null || person === void 0 ? void 0 : person.age);
    // console.log(person!.age);
}
exports.printNameInUSA = printNameInUSA;
const todayUsers = [
    {
        name: "harry",
        age: 22,
        sex: "female"
    },
    {
        name: "kristina",
        age: 24,
        sex: "male"
    }
];
//  ! говорит что здесь точно будет значение
const femaleUsers = todayUsers.find(p => p.sex === "female");
//  на продакшине символ ! не приветвуется, чаще я могу использовать ? при обращение к полю которое должно быть,
//  либо тернарник либо if
console.log(femaleUsers);
// exclamation-mark -  утверждение, говорит о том что я уеждаю TS что я знаю что там будут данные
