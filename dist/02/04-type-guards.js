"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type gurd это когда от функции мы ожидаем в итоге получить непривычный тип как:  pet is Fish
function isFish(pet) {
    // as утверждение означает используй данную запись как Fish
    // Оператор as позволяет сделать утверждение, что та или иная переменная является конкретным типом.
    // Он позволяет делать сужение типа для any и unknown, а также для union типов.
    return pet.swim !== undefined;
}
function isBird(pet) {
    // as утверждение означает используй данную запись как Bird
    return pet.fly !== undefined;
}
function isAnInternetOrder(order) {
    // чтобы вернуть булевое значение я добавил !!
    return !!order && "email" in order;
}
function isATelephoneOrder(order) {
    return !!order && "callerNumber" in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
// type guards
