// record pick omit
// Record - утилита для работы с однотипными данными
// type Names = Record<string, any>
type Names = Record<string, number>
type Brands = "prada" | "zara" | "HM";

type BrandNames  = Record<Brands, string>
// const myBrandsNew: BrandNames = {
//   zara: ""
// }

interface NewTodo {
  id: string,
  title: string,
  msg: string,
  completed: boolean,
}
// возьми из NewTodo конкретное значение
type SimpleTodo = Pick<NewTodo, "title" | "msg">

// возьми из NewTodo все значения кроме тех что я указалконкретное значение
type SimpleTodoWithOmit = Omit<NewTodo, "title" | "msg">

type Regions = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

type CountriesByRegion = Record<Regions, string[]>

const visitedCountries: CountriesByRegion = {
  Africa: ['Egypt', 'Angola', 'Tunis'],
  America: ['Mexico'],
  Asia: ['India'],
  Europe: ['Spain', 'England', 'Hungary'],
  Oceania: []
}

// Дан тип Country, который будет использоваться в разных целях.
//   Мы хотим создать компонент с карточкой, где должны выводиться только названия страны, столица и регион.
//   Как нам сформировать тип CountryCardProps?

  type Country = {
    name: string,
    region: string,
    population: number,
    flag: string,
    capital: string,
    currencies: string[],
    languages: string[],
  }

type CountryCardProps = Pick<Country, "name" | "capital">
// record pick omit