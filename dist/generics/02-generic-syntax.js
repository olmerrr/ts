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
// generic
