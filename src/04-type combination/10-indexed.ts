// indexed
export {}
// тип можно получать по индексу
type SomeTuple = [number, string, boolean]
type T1 = SomeTuple[0] // number

const sizes = ["s","m","l"] as const;
type T2 = typeof sizes[number];
// indexed