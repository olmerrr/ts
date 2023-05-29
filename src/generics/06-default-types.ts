// default types
interface AnyObject {
  [key: string]: unknown
}
interface Todo {
  id: string,
  completed: boolean,
  title: string
}

export async function request<T = AnyObject>(url: string):Promise<T> {
  const response = await fetch(url);

  return response.json();
}

const data = request<Todo[]>("http://localhost:example");
// default types