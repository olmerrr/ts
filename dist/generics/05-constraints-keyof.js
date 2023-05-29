"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
// constraints-keyof
function prop(key, obj) {
    return obj[key];
}
const objOne = {
    a: 1,
    b: 2,
    c: 3
};
prop("a", objOne);
// prop("d", objOne); //err
// Опишите типы для двух функций:
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
// constraints-keyof
