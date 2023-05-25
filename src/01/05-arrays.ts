// arrays
const numbers:number[] = [1,2,3,4];
const cars: string[] = ['bmw', "audi"];
const users: Array<string> = ['nikolai', "sasha"];

let newArr = users.push("ivan");
//  newArr.push(1); // error
console.log(newArr);

interface CarSimple {
  wheels:number,
  brand:string,
};

let carsForMy: CarSimple[] = [];
carsForMy.push({wheels: 2, brand: "Lada"});
// TS хранит сведенья об всех наших интерфейсах во всем проекте

const arrayOfArray:string[][] = [];
arrayOfArray.push(["car", "apple"])
// push'ыть смогу только строки, на другое будет ругаться

function printArray (arr: unknown[]):void  {
  arr.toString()
}
printArray(["121", "car"]);