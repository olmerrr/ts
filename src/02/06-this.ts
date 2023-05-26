// this
function btnHandler(this: HTMLButtonElement, event: Event,) {
  this.disabled = true;
}
// если в функции неизвестно чт опередадут в качестве this, нужно об этом подсказать TS
// this