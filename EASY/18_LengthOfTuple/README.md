### ๐ Length of Tuple ๊ตฌํํ๊ธฐ

```ts
/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #์ฌ์ #tuple

  ### ์ง๋ฌธ

  ๋ฐฐ์ด(ํํ)์ ๋ฐ์ ๊ธธ์ด๋ฅผ ๋ฐํํ๋ ์ ๋ค๋ฆญ `Length<T>`๋ฅผ ๊ตฌํํ์ธ์.

  ์์:

  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5

  > GitHub์์ ๋ณด๊ธฐ: https://tsch.js.org/18/ko
*/

/* _____________ ์ฌ๊ธฐ์ ์ฝ๋ ์๋ ฅ _____________ */

// ์์์ฝ๋
// type Length<T> = any
type Length<T extends readonly unknown[]> = T['length']

/* _____________ ํ์คํธ ์ผ์ด์ค _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

/* _____________ ๋ค์ ๋จ๊ณ _____________ */
/*
  > ์ ๋ต ๊ณต์ ํ๊ธฐ: https://tsch.js.org/18/answer/ko
  > ์ ๋ต ๋ณด๊ธฐ: https://tsch.js.org/18/solutions
  > ๋ค๋ฅธ ๋ฌธ์ ๋ค: https://tsch.js.org/ko
*/

```

#### โญ๏ธ ๊ตฌํ ๋ฐฉ๋ฒ

์์์ ์ ์๊ฐํ๋ ํํธ

- ๋ฐฐ์ด์ ๊ธธ์ด์ ์ ๊ทผํ  ์ ์์ด์ผ ํ ๊ฒ๊ฐ๋ค

1. `length` ํ๋กํผํฐ๋ก ๋ฐฐ์ด ๊ธธ์ด์ ์ ๊ทผํด๋ณด์๋ค

```ts
type Length<T> = T['length'];
```

2. length๊ฐ์ ๋ฐ์์ฌ ์ ์์์ง๋ง, ๋ชจ๋  ์ ํ์ ๋ํ length๊ฐ์ ๋ฆฌํดํด์ผ ํ๊ธฐ ๋๋ฌธ์ ์ผ๋ถ ์ ํ์์๋ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค.
๋ฐ๋ผ์ `extends readonly any[]`๋ก ๋ชจ๋  ์ ํ์ ๋ฐฐ์ด์ด ์ฌ ์ ์๋๋ก ์ฒ๋ฆฌ โญ๏ธ `any[]๋ถ๋ถ์ด unknown[]`์ผ๋ก ๋ฐ๋์ด๋ ํด๋น ์์ ์์๋ ์ค๋ฅ๊ฐ์๋จ

```ts
type Length<T extends readonly any[]> = T['length']
// type Length<T extends readonly unknown[]> = T['length']
```

โญ๏ธ ๋ชจ๋  ์ ํ์ ๋ํด์ ๊ฐ์ ๋ฆฌํดํด์ผํ  ๋ ๊ฐ์ ๋ ๋๊ฒ ์๊ฐํ  ํ์.

>#### ์ถ์ฒ
https://github.com/type-challenges/type-challenges