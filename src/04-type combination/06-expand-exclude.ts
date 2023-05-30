// expand-exclude
export {}
type T0 = Exclude<"a" | "b" | "c", "a">
type T1 = Exclude<"a" | "b" | "c", "a" | "b" | "d">
type T2 = Exclude<string | number | (() => void), Function>;
// Exclude - исключи
type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;
//  исключи из моего статуса все что не есть число
type NumericStatus = Exclude<Status, string>
type StringStatus = Exclude<Status, number>

// Extract - извлечи
type T01 = Extract<"a" | "b" | "c", "a">
type T02 = Extract<"a" | "b" | "c", "a" | "b" | "d">
type T03 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number,
  name: string,
  firstName: string,
  lastName: string,
  sex: "male" | "female"
}
//  keyof - берет из интерфейса ключи и делает из них юнион
type PersonNames = Extract<keyof Person, "firstName" | "lastName" | "secondName">
type PersonInfo = Exclude<keyof Person, "sex" | "age">

// можно отбрасывать какие то значения
type T001 = NonNullable<string | number | undefined>
type T002 = NonNullable<string[] | null | undefined>


export function keysNew<O extends object>(obj:O) {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}
// type Computer = {
//   brand: string,
//   year: number,
//   isAvailable: boolean,
// }
//
// type T0 = Extract<keyof Computer, string>

// Какой набор значений сохранится в T1?

  type Computer = {
    brand: string,
    year: number,
    isAvailable: boolean,
  }

type T111 = Exclude<keyof Computer, string>
// expand-exclude