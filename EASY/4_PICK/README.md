### π Pick κ΅¬ννκΈ°

ν½ νμμ νΉμ  νμμμ λͺ κ°μ μμ±μ μ ννμ¬ νμμ μ μνλ€.

```ts
/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #μ¬μ #union #built-in

  ### μ§λ¬Έ

  `T`μμ `K` νλ‘νΌν°λ§ μ νν΄ μλ‘μ΄ μ€λΈμ νΈ νμμ λ§λλ λ΄μ₯ μ λ€λ¦­ `Pick<T, K>`μ μ΄λ₯Ό μ¬μ©νμ§ μκ³  κ΅¬ννμΈμ.

  μμ:

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }

  > GitHubμμ λ³΄κΈ°: https://tsch.js.org/4/ko
*/

/* _____________ μ¬κΈ°μ μ½λ μλ ₯ _____________ */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/* _____________ νμ€νΈ μΌμ΄μ€ _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
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
```

#### β­οΈ κ΅¬ν λ°©λ²

μμμ μ μκ°νλ ννΈ
- Pickμ λ°μμΌνλ μΈμκ° λκ°κ° μμΌλ μ λ€λ¦­μ 2κ°μ°λ©΄ λ κ²μ΄λ€
- λλ²μ§Έ μ λ€λ¦­μ λ€μ΄κ° κ°μ μ²«λ²μ§Έ μ λ€λ¦­μ μλ μμ±μΌνλ λΆλΆμ§ν©μ΄μ¬μΌνλ€(μμκ°λ νμ)

1. μ λ€λ¦­μ 2κ° λ§λ€μ΄λκ³  extendsλ‘ λΆλΆμ§ν©μΌλ‘ λ§λ€μ΄μ£Όμλ€
```ts
type MyPick<T, K extends keyof T> = {...}
```

2. Kκ° Tμ μλ μμ±λ€μ κ°μΌνλ `T[Key]`λ₯Ό νμμ λ£μ΄μ£Όμλ€
```ts
type MyPick<T, K extends keyof T> = {
  ...: T[Key]
}
```

3. λ§μ§λ§μΌλ‘ ν€κ°μ Kμ μλ ν€κ°μΌλ‘ μ‘μμ£Όμ΄ λ§λ¬΄λ¦¬
```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
```

>#### μΆμ²
https://github.com/type-challenges/type-challenges