### ๐ Readonly ๊ตฌํํ๊ธฐ

TypeScript์ ํ์ ์์คํ์ ์ธํฐํ์ด์ค ์์ฑ์ readonly (์ฝ๊ธฐ ์ ์ฉ)์ผ๋ก ์ง์ ํ  ์ ์๊ฒ ์ฃผ๋ฉฐ ์ด๋ฅผ ํตํด ํจ์ํ ๋ฐฉ์์ด ๊ฐ๋ฅํด์ง๋ค.

```ts
/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #์ฌ์ #built-in #readonly #object-keys

  ### ์ง๋ฌธ

  `T`์ ๋ชจ๋  ํ๋กํผํฐ๋ฅผ ์ฝ๊ธฐ ์ ์ฉ(์ฌํ ๋น ๋ถ๊ฐ)์ผ๋ก ๋ฐ๊พธ๋ ๋ด์ฅ ์ ๋ค๋ฆญ `Readonly<T>`๋ฅผ ์ด๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๊ตฌํํ์ธ์.

  ์์:

  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property

  > GitHub์์ ๋ณด๊ธฐ: https://tsch.js.org/7/ko
*/

/* _____________ ์ฌ๊ธฐ์ ์ฝ๋ ์๋ ฅ _____________ */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}

/* _____________ ํ์คํธ ์ผ์ด์ค _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ ๋ค์ ๋จ๊ณ _____________ */
/*
  > ์ ๋ต ๊ณต์ ํ๊ธฐ: https://tsch.js.org/7/answer/ko
  > ์ ๋ต ๋ณด๊ธฐ: https://tsch.js.org/7/solutions
  > ๋ค๋ฅธ ๋ฌธ์ ๋ค: https://tsch.js.org/ko
*/

```

#### โญ๏ธ ๊ตฌํ ๋ฐฉ๋ฒ

์์์ ์ ์๊ฐํ๋ ํํธ

- readonly ํค์๋๋ฅผ ์ฐ์
- ๋งต๋ ํ์(Mapped Type)์ ์ฌ์ฉํด๋ณผ ์ ์์๊ฒ๊ฐ๋ค

1. ๋งต๋ ํ์์ ์ฌ์ฉํ๊ธฐ ์ํด ์ ๋ค๋ฆญ์ ํ๋ ๋ฃ์ด๋๊ณ , ์ฌ๊ธฐ์ ๋์ค๋ ๊ฐ์ readonly๊ฐ ๋๊ฒ ํค์๋ ์ง์ 
```ts
type MyReadonly<T> = {
  readonly ...
}
```

2. ์๋ ฅ๋ฐ์ T์ ์์ฑ์ ์ ๋ถ ๋ถ๋ฌ์ค๊ธฐ ์ํด `K in keyof T`๋ฅผ ์ฌ์ฉ
```ts
type MyReadonly<T> = {
  readonly  [K in keyof T]: ...
}
```

3. ์์ฑ์ ๋ง๋ ํ์์ ๋ฃ์ด์ฃผ์๋ค.
```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
```

โญ๏ธ ๊ฒฐ๊ตญ `[K in keyof T]: T[K]`๋ฅผ ํ๊ฒ ๋๋ฉด T์ ๋๊ฐ์ ์ธํฐํ์ด์ค๋ฅผ ๋ง๋๋๊ฒ์ด๋ค.

>#### ์ถ์ฒ
https://github.com/type-challenges/type-challenges
