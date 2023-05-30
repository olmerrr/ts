// readonly, required, partial
export interface Todo {
  readonly id:string,
  title?:string,
  description:string,
  completed:boolean
}
// type ReadOnlyTodo = Readonly<Todo>
// ReadOnlyTodo все значения станут readonly

// Partial делает поля необязательными
type PartialTodo = Partial<Todo>

// Require делает поля обязательными
type RequiredTodo = Required<Todo>
//
// export interface Todo {
//   readonly id:string,
//   title?:string,
//   description:string,
//   completed:boolean
// }
// readonly, required, partial

