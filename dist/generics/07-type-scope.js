"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = void 0;
//type-scope
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2);
// В каких сущностях мы можем применять дженерики TypeScript?.
//   Для функций, классов и интерфейсов/алиасов, а также методов классов и интерфейсов.
// Опишите типы для следующей функции
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
// Дженерики - это универсальные типы, которые позволяют использовать типы как параметры и динамически
// их назначать
// Как правило они однобуквенные (T)
// Они могут хранить любое количество параметров,
// У них может быть значение по умолчанию
// Есть область видимости, если используем замыкание
// extends помогает сужать типы в дженериках
//  keyof - берет интерфейс и делает из его ключей юнион для дженерика
// мы можем обращаться к типам по индекусу T[U]
//type-scope
