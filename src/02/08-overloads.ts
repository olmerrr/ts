// overloads (перегрузки) - это когда поведение одной и той же ф-нции нужно описать несколько раз,
// происходит потому что TS не знает что мы ему вернем (прим string | number)
// перегрузка нужна для того чтобы помочь  TS определиться что нужно вернуть во внешний мир с фун-ции
function add(a: number, b: number): number;
function add(a:string, b: string):  string;
function add(a:number, b: string):  number | string;
function add(a:string, b: number):  string | number;

function add (a: any, b: any): number | string  {
  return a + b;
}
add("1",2);
// the same
// function add (a: any, b: any): any  {
//   return a + b;
// }

type AsynkCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: AsynkCb): number;


function asyncSum(a: number, b: number, cb?: AsynkCb): any {
  const result:number = a + b;
  if (cb) {
    return cb(result);
  }

  return  Promise.resolve(result)
}
asyncSum(1, 2);

function head(value: string):string
function head(value: number[]):number
function head(value: boolean[]):boolean
function head(value: string | number[] | boolean[]):any {
  return value[0];
}
head([1]);
// overloads
