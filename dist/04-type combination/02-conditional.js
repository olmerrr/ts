"use strict";
// conditional type
const someX = 16;
const isXNegative = someX >= 0 ? "no" : "yes";
const o1 = {
    // любой набор ключей, но значение обязательно строки
    r: "da",
    r1: "sd",
    // r2: 12,//err
};
const objWithDate = {
    someField: new Date(),
    // soleMoreField: '12' // err
};
// в  TS  доступны только тернарники, if/else не доступны
// conditional type
