### ๐ Tuple to Object ๊ตฌํํ๊ธฐ

```ts
/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #์ฌ์ #object-keys

  ### ์ง๋ฌธ

  ๋ฐฐ์ด(ํํ)์ ๋ฐ์, ๊ฐ ์์์ ๊ฐ์ key/value๋ก ๊ฐ๋ ์ค๋ธ์ ํธ ํ์์ ๋ฐํํ๋ ํ์์ ๊ตฌํํ์ธ์.

  ์์:

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

  > GitHub์์ ๋ณด๊ธฐ: https://tsch.js.org/11/ko
*/

/* _____________ ์ฌ๊ธฐ์ ์ฝ๋ ์๋ ฅ _____________ */
// ๋ฌธ์  ์์
// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

/* _____________ ํ์คํธ ์ผ์ด์ค _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/* _____________ ๋ค์ ๋จ๊ณ _____________ */
/*
  > ์ ๋ต ๊ณต์ ํ๊ธฐ: https://tsch.js.org/11/answer/ko
  > ์ ๋ต ๋ณด๊ธฐ: https://tsch.js.org/11/solutions
  > ๋ค๋ฅธ ๋ฌธ์ ๋ค: https://tsch.js.org/ko
*/
```

#### โญ๏ธ ๊ตฌํ ๋ฐฉ๋ฒ

์์์ ์ ์๊ฐํ๋ ํํธ

- `tuple` ์์ ๋ฌด์ธ๊ฐ ๋นผ์ฌ ์ ์๋ ํค์๋๊ฐ ์์๊น
- key value๋ฅผ ๋๊ฐ์ด ๋ฃ์ด์ฃผ๋๊ฒ์ด ์ค์

1. ์ผ๋จ any ๋ถ๋ถ์ ๋นผ์ฃผ๊ณ  ์ํํ์ฌ value๊ฐ์ ๋๊ฐ์ด ๋ฃ์ผ๋ ค๊ณ  ์๋ํด๋ณด์๋ค

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[keyof T]] : K
}
```

2. `keyof T` ๋ฅผ ์คํํ๋ `'string | number | symbol'` ํ์์ผ๋ก ์ง์ ๋์ด `T[number]`๋ก ์ ๋ฆฌ

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]] : K
}
```

3. ํ๋จ ์ฝ๋์ `@ts-expect-error` ๋ถ๋ถ์์ ์๋ฌ๋ฅผ ๋์์ฃผ๋ ์ด์ ๋ฅผ ์๊ฐํด๋ณด๋ค๊ฐ ๊ฒฐ๊ตญ ์ ๋ต์ ๋ณด๋
`any[]` ๊ฐ ์๋ `PropertyKey[]`๋ก ์ ๋ค๋ฆญ ์๋ฆฌ์ ๋ฃ์ด์ฃผ์๋ค

```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
   [K in T[number]] : K
}
```

โญ๏ธ Easy๋ผ๊ณ  ๋์ด์์ง๋ง ๊ฝค๋ Easyํ์ง ์์ ๋ฌธ์ .. PropertyKey๋ฅผ ํฌํจํด์ ํ๋ฒ ๋ ํ์ ๊ตฌํ์ ๋ํด์ ๋๋์๋ณผ ํ์๊ฐ ์๋ค.

>#### ์ถ์ฒ
https://github.com/type-challenges/type-challenges