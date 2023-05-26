// exclamation-mark -  утверждение, говорит о том что я уеждаю TS что я знаю что там будут данные
let word: string | null = null;
const num = 10;
if (num > 5) {
  word = "Hello Yaroslav";
}
// знак ! говорит мы точно знаем что там будет значение
console.log(word!.toUpperCase());
// console.log(word.toUpperCase() as string);
// console.log(word?.toUpperCase());
// @ts-ignore
export  function printName(name?: string) {
  // знак ! говорит мы точно знаем что там будет значение
  const fullName: string = name!;
  // const fullName: string = name || "";
}

interface IPersonFromUSA {
  name: string,
  age: number,
  sex: "female" | "male"
}

export function printNameInUSA(person?: IPersonFromUSA) {
  console.log(person?.age);
  // console.log(person!.age);
}
const todayUsers: IPersonFromUSA[] = [
  {
    name: "harry",
    age: 22,
    sex: "female"
  },
  {
    name: "kristina",
    age: 24,
    sex: "male"
  }
];
//  ! говорит что здесь точно будет значение
const femaleUsers = todayUsers.find(p => p.sex === "female")!;
//  на продакшине символ ! не приветвуется, чаще я могу использовать ? при обращение к полю которое должно быть,
//  либо тернарник либо if
console.log(femaleUsers);

// exclamation-mark -  утверждение, говорит о том что я уеждаю TS что я знаю что там будут данные

