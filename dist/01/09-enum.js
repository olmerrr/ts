"use strict";
// enum
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square"; // 1
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
console.log(myShape);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ClientSide"] = 400] = "ClientSide";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
const newDev = {
    login: "test123",
    skills: ["html"],
    level: Grades.Junior
};
function upGrade(user) {
    if (newDev.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    else if (newDev.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}
