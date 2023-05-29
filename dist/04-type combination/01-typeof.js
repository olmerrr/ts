"use strict";
// typeof
function averageNew(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
const str = "Hello Yaroslav";
const max = (...numbers) => Math.max(...numbers);
max(1, 2, 3, 4); // ok
// typeof
