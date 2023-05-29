"use strict";
function toArray(...arg) {
    return arg;
}
// чтобы я не передал в эту фу-ция я получу массив Т, дженерик дает гибкость в работе с типом значений
// T[] same Array<T>
// function toArray(...arg: Array<number | string >) {
//   return arg;
// }
toArray(1, 2, 3, 4, 5);
toArray("xc", "sd");
//мой опыт с перегрузкой, перегрузка - она как сценарий дял функции, мы наперед думаем что примит и что вернет ф-я,
// и по этмоу я пишу разные варианты этих сценариев в виде перегрузки
function newHead(value) {
    return value[0];
}
newHead([1, 2, 3, 4]);
newHead(["car", "bird"]);
newHead([1, "bird"]);
newHead([1, "", 12.33, [1], "num"]);
// generic in interface
// я спецом ограничиваю что ожидаю число
const obj1New = {
    title: "title",
    value: 12
};
const obj1NewO = {
    title: "title",
    value: "sc"
    // value: 112 // err
};
// массив чисел
let newObjArr = {
    title: "Label",
    value: [12]
};
const head123 = (value) => value[0];
head123([1]);
// Затипизируйте данную функцию:
function append(el, list) {
    return list.concat(el);
}
// Это по сути полиморфизм - мы используем разные типы дял похожего функционала
append(1, [0, 2, 3]);
append("1df", ["car"]);
//   Какой буквой мы обозначаем динамический параметр дженерика?
// Любой буквой или словом. Ограничений нет.
// Но в мире TypeScript принято использовать однобуквенные имена параметров с большой буквы.
// Чаще всего можно встретить параметр T, как сокращение от type.
// generic
