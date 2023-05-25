// objects more

interface User {
  login: string,
  email: string,
  password: string,
  isOnline: boolean,
  lastVisited: Date
}
// Date это специальный тип для работы с датой
interface Admin extends User {
  role: string
}

function printPoint(point: {
  x:string ,
  y:string
}): void {
  console.log(
    point.x,
    point.y,
  )
}

const obj = {
  x: "1220000",
  y: "0242020",
  z: "1342020",
}
printPoint(obj);
// работая с параметрами фкнций мы говорим о Минимальном Наборе параметров что нам нужно, если их будет больше это не
// приведет к ошибке, но если не будет обязательных x, y то будет ошибка

// function printName(name:string, lastName?:string):string {
//   return `Hello, ${name} ${lastName}`
// };

function printName(user: {name:string, lastName?:string}):void {
  console.log("Hello," , user.name.toUpperCase())
  if( user.lastName) console.log(user.lastName.toUpperCase())
};
//  TS18048: 'user.lastName' is possibly 'undefined'.
// означает что lastName может и не быть по этому нужно добавить условие if( user.lastName) console.log(user.lastName.toUpperCase())
// или  console.log(user.lastName?.toUpperCase())
const user = {
  name: "Yaroslav",
  lastName: "Dombrovskiy"
}
printName(user);

const newUser: User = {
  login: "kolbasa",
  email: "kolbas@test.i.ua",
  password: "12341a",
  isOnline: false,
  lastVisited: new Date(2022, 4, 6)
};

const newAdmin:Admin = {
  login: "kolb",
  email: "kols@test.i.ua",
  password: "1341a",
  isOnline: true,
  lastVisited: new Date(2023, 4, 6),
  role: "admin"
}
function login (newUser:{login: string, password: string}): void {
  if (newUser.login.length > 0 && newUser.password.length > 0) {
    console.log("Hello,", newUser.login)
  }
}
console.log(login(newUser));


