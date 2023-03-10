### ๐ First of Array ๊ตฌํํ๊ธฐ

```ts
/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #์ฌ์ #array

  ### ์ง๋ฌธ

  ๋ฐฐ์ด(ํํ) `T`๋ฅผ ๋ฐ์ ์ฒซ ์์์ ํ์์ ๋ฐํํ๋ ์ ๋ค๋ฆญ `First<T>`๋ฅผ ๊ตฌํํ์ธ์.

  ์์:

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

  > GitHub์์ ๋ณด๊ธฐ: https://tsch.js.org/14/ko
*/

/* _____________ ์ฌ๊ธฐ์ ์ฝ๋ ์๋ ฅ _____________ */
// ๋ฌธ์  ์์
// type First<T extends any[]> = any

type First<T extends any[]> = T extends [] ? never : T[0];

/* _____________ ํ์คํธ ์ผ์ด์ค _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

/* _____________ ๋ค์ ๋จ๊ณ _____________ */
/*
  > ์ ๋ต ๊ณต์ ํ๊ธฐ: https://tsch.js.org/14/answer/ko
  > ์ ๋ต ๋ณด๊ธฐ: https://tsch.js.org/14/solutions
  > ๋ค๋ฅธ ๋ฌธ์ ๋ค: https://tsch.js.org/ko
*/

```

#### โญ๏ธ ๊ตฌํ ๋ฐฉ๋ฒ

์์์ ์ ์๊ฐํ๋ ํํธ

- ๋ฐฐ์ด์ ์ฒซ๋ฒ์งธ ์์๋ฅผ ๊ฐ์ ธ์ค๋๊ฒ์ด๋ฉด `์ ๋ค๋ฆญ[0]` ์ด ๋์ง ์์๊น.
- ๋น ๋ฐฐ์ด์ ์ฒดํฌํด๋ณด์์ผํ ๊ฒ๊ฐ๋ค.

1. `์ธ๋ฑ์ค ์ ๊ทผ` ์ ํตํด์ ๋ฐฐ์ด(ํํ)์ ์ธ์๋ก ๋ฐ์์ `T[0]` ์ ์๋

```ts
type First<T extends any[]> = T[0]
```

2. `Expect<Equal<First<[]>, never>>,` ๋น๋ฐฐ์ด์ผ๊ฒฝ์ฐ์ ์๋ฌ๊ฐ ๋ฐ์.
๋น ๋ฐฐ์ด์ ์ฒดํฌํ๊ธฐ ์ํด์ `์ผํญ ์ฐ์ฐ์` ์ฌ์ฉ. ๋น ๋ฐฐ์ด์ผ๋๋ `never`

```ts
type First<T extends any[]> = ... ? never : T[0]
```

3. `T extends []` ๋ฅผ ํตํด์ ๋ฐ์ `T` ๊ฐ ๋ฐฐ์ด์ ์์ฑ์ ๊ฐ๋๋ก ํ์๋ค

```ts
type First<T extends any[]> = T extends [] ? never : T[0]
```

โญ๏ธ ์์ ํํธ ์ ๊ทผ์ ์ข์์ผ๋, `T extends []` ๋ฅผ ์ฌ์ฉํด์ ๋ฐฐ์ด์ ์์ฑ์ ๊ฐ๋๋ก ํ๋ ๋ถ๋ถ์ด ์กฐ๊ธ ํท๊ฐ๋ ธ๋ค.

>#### ์ถ์ฒ
https://github.com/type-challenges/type-challenges