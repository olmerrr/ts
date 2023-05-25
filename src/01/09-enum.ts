// enum
enum ShapeKind {
  Circle,  // 0
  Square  // 1
}
const myShape = ShapeKind.Circle;
console.log(myShape);

enum StatusCode {
  ClientSide = 400,
  NotFound = 404,
  ServerError = 500,
}

enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior"
}
interface superDeveloper {
  login: string,
  skills: [string],
  level: Grades
}
const newDev:superDeveloper = {
  login: "test123",
  skills: ["html"],
  level: Grades.Junior
}
function upGrade(user: {level: Grades}) {
  if (newDev.level === Grades.Junior) {
    user.level = Grades.Middle
  } else if (newDev.level === Grades.Middle) {
    user.level = Grades.Senior
  }
}