// objects
// interface принято называть с большой буквы
interface Car {
  wheels: number,
  brand: string,
  type: string,
  color: string,
  isNew: boolean,
  //  не обязательное поле
  model?: string
  //  не обязательное поле

  // добавить неисвестное количетсво полей
  [key: string]: unknown
  // добавить неисвестное количетсво полей
};

// по стайлгайду динамическое поле принято указывать ["someField"]

const car: Car = {
  wheels: 4,
  brand: "bmw",
  type: "sedan",
  color: "red",
  isNew: true,
  // добавить неисвестное количетсво полей
  country: "Germany"
//     если мы упустим какое то поле или передадим не тот тип в соответсвующие поле - TS выдаст ошибку об жтом
}

