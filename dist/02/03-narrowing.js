"use strict";
// narrowing сужение типов
function example(x) {
    if (typeof x === "number") {
        x.toString();
    }
    else if (typeof x === "string") {
        x.toUpperCase();
    }
    else if (x === undefined) {
        console.log("Please input value X: ");
    }
    else {
        return x;
    }
}
function example1(strs) {
    //  проверка на то что у нас обьект
    if (strs && typeof strs === "object") {
        console.log(strs === null || strs === void 0 ? void 0 : strs.length);
        //   каждый раз как я добавляю проверку у TS остается меньше вопросов какой тип у  strs
    }
    else if (typeof strs === "string") {
        console.log("it's string: ", strs);
        //   сужая типы мы помогаем разобраться TS с чем мы работаем
    }
    else if (typeof strs === null) {
        console.log("nothing...");
    }
}
function example2(str) {
    if (str instanceof Date) {
        str.getTime();
    }
    else if (str && typeof str === "object") {
        console.log("таки массив чисел");
        str.push(2);
    }
}
function animalCan(animal) {
    //  у параметра проверяем есть ли ключ swim or fly
    if ("swim" in animal) {
        console.log("Fish can swim");
        return animal.swim();
    }
    else if ("fly" in animal) {
        console.log("Bird can fly");
        return animal.fly();
    }
    return;
}
