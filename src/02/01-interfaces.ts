// interfaces more details
// что бы избежать повторяющихся интерфейсов, в любом месте файла с которым я работаю нужно добавить экспорт

 interface UserForm {
  readonly email: string,
  readonly login: string,
  password: string
}
// интерфейсы без проблем могут расширяться(склеиваться), это норм, когда мы еще раз описуем интерфейс,
// тем самым добавляем новые поля
interface UserForm {
  isOnline?: boolean
}
interface Person {
  readonly firstName: string,
  lastName: string,
  phone?: string,
  yearOfBirth?: number,
}
// создание интерфейста на основе других интерфейсов
interface Employee extends UserForm, Person {
  // могу добавить новое поле
  gender: string,
  // могу добавить свой union находу
  expLevel?: "junior" | "middle" | "senior"
  // методы
  say(): void,
  code?: (arg: string) => void
}

const testUserOne: Employee = {
  firstName: "serhii",
  lastName: "franko",
  isOnline: true,
  gender: "male",
  expLevel: "middle"
}

const testUser: UserForm = {
  email: "test@",
  login: "papka",
  password: "1233",
  isOnline: false,
}

class MyDeveloper implements Employee {
  say() {
  }
}