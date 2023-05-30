// conditional type
const someX:number = 16;
const isXNegative = someX >= 0 ? "no" : "yes"
// Record -это словарь

interface StringRecord {
  [key: string]: string
}
interface DateRecord {
  [key: string]: Date
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord
type Obj1 = MyRecord<string>
const o1: Obj1 = {
  // любой набор ключей, но значение обязательно строки
  r: "da",
  r1: "sd",
  // r2: 12,//err
}
type Obj1Date = MyRecord<number>
const objWithDate:Obj1Date = {
  someField: new Date(),
  // soleMoreField: '12' // err
}
// в  TS  доступны только тернарники, if/else не доступны
// conditional type