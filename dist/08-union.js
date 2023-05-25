"use strict";
// для дальнейшей работы мы сузили наши типы до 3-х литералов ("ok" | "loading"| "error")
// запись черех | обозначает или это или это или это , ничего другого
const res = "ok";
// мы сами себе устанавливаем рамки чтобы не допустить ошибок
console.log(res);
function printId(id) {
    if (typeof id === "number") {
        console.log(id.toString().toUpperCase());
    }
    else
        console.log(id.toUpperCase());
}
printId("123xaw");
function welcome(person) {
    // проверка на то что person это массив
    if (Array.isArray(person)) {
        return 1;
    }
    else
        return "person";
}
const newSuperArr = [];
// create a function that change level of incoming developer
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
const yaroslav = {
    level: "middle",
    login: "test",
    skills: ["html", "css", "js"]
};
gradeDeveloper(yaroslav, "senior");
