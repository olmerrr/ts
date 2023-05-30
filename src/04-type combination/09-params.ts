// params
function  newF1(arg: {a: number, b: string}) {
  return arg.a + arg.b
  }
type T0 = ReturnType<typeof newF1>
type T1 = Parameters<typeof newF1>
type T2 = ConstructorParameters<ErrorConstructor>

class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>

// params