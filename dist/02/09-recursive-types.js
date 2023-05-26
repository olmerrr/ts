"use strict";
const nums = [1, 2, 3, [1, 2, 4, [333, 1, 22],]];
// тип сам на себя ссылается и позволяет нам как тип использовать самого себя
nums.push(12, [2]);
const test = [];
function isJSON(arg) { }
;
isJSON(1);
isJSON("test");
isJSON({ value: 1 });
isJSON([[1, 2]]);
//recursive-types
