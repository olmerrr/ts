"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type gurd это когда от функции мы ожидаем в итоге получить непривычный тип как:  pet is Fish
function isFish(pet) {
    // as утверждение означает используй данную запись как Fish
    return pet.swim !== undefined;
}
function isBird(pet) {
    // as утверждение означает используй данную запись как Bird
    return pet.fly !== undefined;
}
// type guards
