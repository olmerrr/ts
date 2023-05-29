// constraints-keyof
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key]
}

// можно сократить до вида
// function prop<T>(key: keyof T, obj: T): T[keyof T] {
//   return obj[key]
// }
// можно сократить до вида
interface Laptop {
  brand: string,
}

type F = Laptop["brand"];
const objOne = {
  a: 1,
  b: 2,
  c: 3
}
prop("a", objOne);
// prop("d", objOne); //err
// Опишите типы для двух функций:

  export function keys<O extends object>(obj:O): Array<keyof O> {
    const currentKeys = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
  }


export function values<O extends object>(obj: O):Array<O[keyof O]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}


// constraints-keyof
