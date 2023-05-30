// mapped-types
type PcBrand = {
  name: string,
  country: string,
  createdAt: Date
}
// создание юниона во внешнем коде
type FamousBrands = "apple" |  "dell" | "hp";

type MyPcRecord = {
  // создаю новый тип как переменную
  [BrandKey in FamousBrands]?: PcBrand
//? сделать поле опциональным
}

const BrandRecord: MyPcRecord = {
  apple: {
    country: "Ukraine",
    name: "Cossack-1",
    createdAt: new Date()
  }
}

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.name.length);
}

type PartOfWindow = {
  // создание юниона внутри
  [Key in "document" | "screen" | "navigator"]? : Window[Key]
}
const checkWindow: PartOfWindow = {
  screen: window.screen
}
// mapped-types