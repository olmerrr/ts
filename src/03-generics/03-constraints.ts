// ограничение для generic
  function printLength<T extends {length: number} >(arg: T): number {
    // T extends {length: number}  поможет сделать ограничение для дженерика что я ожидаю число
    return arg.length
  }
  printLength("123");
  printLength(["123"]);
  // printLength(12); //err
  // printLength({
    // value: 123,
  // });//err
// printLength(false); //err
// printLength({value: "str"}) //err
printLength({
  id: 1,
  length: 2
}) // work
// ограничение для generic
