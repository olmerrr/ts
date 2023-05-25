// union - узкий тип для узких значений
type Status = "ok" | "loading"| "error";
// для дальнейшей работы мы сузили наши типы до 3-х литералов ("ok" | "loading"| "error")
// запись черех | обозначает или это или это или это , ничего другого
const res: Status = "ok";
// мы сами себе устанавливаем рамки чтобы не допустить ошибок
console.log(res);

function printId(id: number | string): void {
 if (typeof id === "number") {
   console.log(id.toString().toUpperCase());
 } else  console.log(id.toUpperCase())
}
printId("123xaw");

function welcome(person: [string, string] | string): number | string {
  // проверка на то что person это массив
  if (Array.isArray(person)) {
    return 1;
  } else return "person"
}

const newSuperArr : (number | string)[] = [];
interface Developer {
  login: string,
  skills: string[],
  level: Level,
}

// create a function that change level of incoming developer

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level,
}

// create a function that change level of incoming developer

function gradeDeveloper(dev: {level: Level}, newLevel: Level) {
  dev.level = newLevel;
}
const yaroslav: Developer = {
  level:"middle",
  login: "test",
  skills: ["html", "css", "js"]
};

gradeDeveloper(yaroslav, "senior");
