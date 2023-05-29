// ограничение для generic keyof
type WindowProp = keyof Window;
// obj Window DOM


const myValue: WindowProp = "ontoggle";


interface PC {
  brand: string,
  year: string
}

type MyTyp = keyof PC;//brand | year
const testMyTyp: MyTyp = "brand";

// keyof - создает union некоторых значений это может помочь в сужение значений
type Tup1 = keyof [string, number];
const testVal1:Tup1 = "0"
// ограничение для generic keyof
