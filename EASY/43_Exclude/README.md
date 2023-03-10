### ๐ Exclude ๊ตฌํํ๊ธฐ

```ts
/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #์ฌ์ #built-in #union

  ### ์ง๋ฌธ

  `T`์์ `U`์ ํ ๋นํ  ์ ์๋ ํ์์ ์ ์ธํ๋ ๋ด์ฅ ์ ๋ค๋ฆญ `Exclude<T, U>`๋ฅผ ์ด๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๊ตฌํํ์ธ์.

  ์์:

  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

  > GitHub์์ ๋ณด๊ธฐ: https://tsch.js.org/43/ko
*/

/* _____________ ์ฌ๊ธฐ์ ์ฝ๋ ์๋ ฅ _____________ */

// ์์์ฝ๋
// type MyExclude<T, U> = any
type MyExclude<T, U> = T extends U ? never : T

/* _____________ ํ์คํธ ์ผ์ด์ค _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ ๋ค์ ๋จ๊ณ _____________ */
/*
  > ์ ๋ต ๊ณต์ ํ๊ธฐ: https://tsch.js.org/43/answer/ko
  > ์ ๋ต ๋ณด๊ธฐ: https://tsch.js.org/43/solutions
  > ๋ค๋ฅธ ๋ฌธ์ ๋ค: https://tsch.js.org/ko
*/

```

#### โญ๏ธ ๊ตฌํ ๋ฐฉ๋ฒ

์์์ ์ ์๊ฐํ๋ ํํธ

- union ํ์๋ค ์ค์์ ํน์ ํ ๊ฒ์ ์ ์ธํด์ผํ๋ค.

1. ์ ๋ค๋ฆญ์ ๋๊ฐ์ ํ์ ๋ณ์๋ฅผ ๋ฐ์์ผ ํ  ๊ฒ ๊ฐ๋ค.

```ts
type MyExclude<T, U>
```

2. ์กฐ๊ฑด์ ๊ฑธ์ด์ ์กฐ๊ฑด์ ๋ง์๋ / ๋ง์ง ์์๋๋ฅผ ๊ตฌ๋ณํด๋ด์ ๋ฐํํด์ฃผ๊ธฐ์ํด ์ผํญ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด๋ณด์๋ค.

```ts
type MyExclude<T, U> = ... ? never : T;
```

3. ๋๋ฒ์งธ๋ก ๋ค์ด์ค๋ ๊ฒ์ด ์๋ ๊ฒ๋ค๋ง์ ์ถ์ถํ๊ธฐ ์ํด์ ์กฐ๊ฑด์ ๊ฑธ์ด์ฃผ์๋ค.

```ts
type MyExclude<T, U> = T extends U ? never : T;
```
