"use strict";
// functions
function sum(a, b) {
    // если бы я пытался добавить к строке число ts ругнеться
    return a + b;
}
console.log(sum(3, 3));
// ts дает подсказку насчет параметров функции, а так же то что возвращает функция
//всегда нужно начинать с типизации параметров ф-ции, а потом уже заниматься тем чт овозвращает ф-ция
//  подсказки в количество параметров либо их типов очень помогают в разработке
// типы ф-ий
function log(name) {
    console.log("Hello " + name);
    //     если нету return функция возвращает void
}
//void - говорит о том что ф-ция завершиться
// never - функция никогда не доведет свою работу до конца
function crush() {
    throw new Error("crush");
}
//? необязательный параметр
function helloFunction(firstName, secondName, thirdName) {
    return `Your name: ${firstName}, 
            your second-name ${secondName}, 
            and maybe your third name ${thirdName}`;
}
// могу передать третий параметр а могу не передавать, ошибок не будет так как третий параметр не обязательный
helloFunction("Alex", "White");
//если я не знаю сколько у меня будет параметров в функции, нужно подсказать TS'y тип с чем ему нужно работать
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(average(12, 11, 10));
const averageV2 = (...nums) => {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
};
console.log(averageV2(4, 1, 1));
const newSum = (a, b) => a + b;
console.log(newSum(4, 2));
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log(slice("some string", 2, 6));
