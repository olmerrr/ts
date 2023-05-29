// generic
// example 03-generics
// Array<string>
// Promise<number>
type TypeFactoring<T> = T;
// в дженериках принято указывать тип с помощью одной заглавной буквы

// type TypeFactoring<T, U> = T;
// валидно указать и два типа но в командах чаще используют одну букву для одного типа

type XType1 = TypeFactoring<string>
type XType2 = TypeFactoring<number>
type XType3 = TypeFactoring<boolean>


function toArray<T>(...arg: T[]): T[] {
  return arg;
}

// чтобы я не передал в эту фу-ция я получу массив Т, дженерик дает гибкость в работе с типом значений
// T[] same Array<T>
// function toArray(...arg: Array<number | string >) {
//   return arg;
// }

toArray<number>(1, 2, 3, 4, 5);
toArray("xc", "sd");
// можно было бы добавить перегрузку для number | string
// toArray("xc","sd", 1);

function newHead(value: string): string
function newHead(value: readonly []): undefined
function newHead(value: readonly []): unknown
function newHead<T>(value: readonly T[]): T[]
//мой опыт с перегрузкой, перегрузка - она как сценарий дял функции, мы наперед думаем что примит и что вернет ф-я,
// и по этмоу я пишу разные варианты этих сценариев в виде перегрузки
function newHead(value: any): any {
  return value[0]
}

newHead([1, 2, 3, 4]);
newHead(["car", "bird"]);
newHead([1, "bird"]);
newHead([1, "", 12.33, [1], "num"]);
// generic

// generic in interface
interface ModelData<T> {
  title: string,
  value: T // number, [], boolean..
}

// generic in interface
// я спецом ограничиваю что ожидаю число
const obj1New: ModelData<number> = {
  title: "title",
  value: 12
}
const obj1NewO: ModelData<string> = {
  title: "title",
  value: "sc"
  // value: 112 // err
}

// массив чисел
let newObjArr: ModelData<Array<number>> = {
  title: "Label",
  value: [12]
}

const head123 = <T>(value: T[]): T => value[0];
head123([1]);

// Затипизируйте данную функцию:

function append<T>(el: T, list: T[]):T[]{
  return list.concat(el)
}
// Это по сути полиморфизм - мы используем разные типы дял похожего функционала
append(1, [0,2,3])
append("1df", ["car"])

//   Какой буквой мы обозначаем динамический параметр дженерика?
// Любой буквой или словом. Ограничений нет.
// Но в мире TypeScript принято использовать однобуквенные имена параметров с большой буквы.
// Чаще всего можно встретить параметр T, как сокращение от type.
// generic