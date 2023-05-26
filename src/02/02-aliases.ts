// aliases
type Union1 = "a" | "b" | "c"| "d";
type Union2 = "a" | "b" | "c"| "i";

type Union3 = Union1 | Union2;
// типы не разширяются, типы берут уникальные значения(повторов не будет)

// хранение в юнионе только одинаковых данных(a,b,c) c помощью символа &
type Union4 = Union1 & Union2;

// в type я не могу добавить  extends

export type User = {
  login: string
}

export type Person = {
  img: string,
  login: number
}
// наследую type
type Union5 =  User & Person

type Union6 = { a: string | number, b: number, c: string} & {a: string, b: number, c: string};

const testUnion6:Union6 = {
  a: "sc",
  b:3,
  c: "true"
}

// разница между aliases и interface

//interface, по стайл гайду в некоторых командах интерфейсы пишут через I (example: IUser)
// 1. когда мы хотим чтото расширять в будущем лучше использовать интерфейсы
// 2. для создания классов использ интерфейсы

interface IProduct {
  price: number,
  isNew: boolean,
  isSale: boolean,
  title: string
}
interface IVehicle {
  wheels: number,
  year: number,
  brand: string
}
// склеивание интерфейсов и добавление новых полей в новом интерфейсе
interface ICar extends IProduct, IVehicle {
  type: string,
  model: string,
}

const vazCar:ICar = {
  brand: "Vaz",
  isNew: false,
  isSale: true,
  model: "9-ka",
  price: 11100,
  title: "fireBomb",
  type: "sedan",
  year: 1916,
  wheels: 3
}



//aliases type
// 1.примитивы, юнионы
// 2 нельзя дублировать уже созданый тип(в одном файле)
type ProductType = {
  price: number,
  isNew: boolean,
  isSale: boolean,
  title: string
}
type VehicleType = {
  wheels: number,
  year: number,
  brand: string
}
// склеивание  type's и добавление новых полей в новом типе
type CarType = IProduct & IVehicle & {
  type: string,
  model: string,
}

const myCarLamba: CarType = {
  wheels: 4,
  year: 1999,
  title: "agon6",
  price: 10000,
  isSale: false,
  isNew: false,
  brand: "DjamshutIco",
  model: 'RSX',
  type: "universal"
}
//если где то в проекте type ругается что использую тот же тайп нужно добавить export