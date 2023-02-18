/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/* _____________ Test Cases _____________ */
type cases = [
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}