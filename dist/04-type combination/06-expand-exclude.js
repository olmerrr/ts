"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysNew = void 0;
function keysNew(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keysNew = keysNew;
// expand-exclude
