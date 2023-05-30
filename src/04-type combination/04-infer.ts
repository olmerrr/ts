// infer
function  fromPairFn(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value
  }
}
type FirstArg<T> = T extends (first: infer First, ...arg: any[]) => any ? First : never
// infer - позволяет вытянуть какой то тип из существующей структуры
const myNewPair: FirstArg<typeof fromPairFn> = ["myKey", "myValue"];

// утверждаю что это на самом деле так(это не гуд практика, лучше не злоупотреблять таким)
// fromPairFn(myNewPair as [string, string]);
type ConstructorFirstArg<T> = T extends {new(arg: infer A, ...args:any[]): any } ? A: never;

class Computer {
  constructor(brand:string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = "";
let dateArg: ConstructorFirstArg<typeof Date>
// infer

