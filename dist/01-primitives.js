"use strict";
// numbers
let x = 10;
const b = 13.4;
// console.log(x.toUpperCase()) //error
console.log(x.toString()); // "10"
console.log(b.toString()); // "13.4"
let z = NaN; // z = number
// const bigIntegerValue = 1345n; //err about bigInteger type
// bigInteger - не может быть дробным
// string
const msg = "Hello World";
const simb = Symbol("as");
// если будут операции с разными типами типу строка + число - TS ругнеться
//boolean
let isTrue = true;
isTrue = false;
// isTrue = 10; // Error
//nothing
let h = undefined;
let g = null;
// literal или const - одно конкретное значение, которое не может быть изменене
//universal
let m1 = 1;
m1 = "";
m1 = {};
m1.toString();
m1.toUpperCase();
// any - возможность в любой момент поменять тип, есго стоит использовать только в том случае если я не знаю
// что нужно использовать, либо же не знаю чего ожидать от функции.
let m122x2 = 1;
// m122x2.toUpperCase();
//unknown  - это когда я не знаю какое значение будет храниться, но мы предпологаем что значение этой переменной
// я узнаю позднее
if (typeof m122x2 === "string")
    m122x2.toUpperCase();
//unknown уже начинает делать нам рамки чтобы мы меньше ошибались в будущем
