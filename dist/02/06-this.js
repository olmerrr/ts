"use strict";
// this
function btnHandler(event) {
    this.disabled = true;
}
// если в функции неизвестно чт опередадут в качестве this, нужно об этом подсказать TS
// this
