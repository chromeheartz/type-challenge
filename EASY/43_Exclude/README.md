### 📌 Exclude 구현하기

```ts
/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #쉬움 #built-in #union

  ### 질문

  `T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.

  예시:

  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

  > GitHub에서 보기: https://tsch.js.org/43/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 예시코드
// type MyExclude<T, U> = any
type MyExclude<T, U> = T extends U ? never : T

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/43/answer/ko
  > 정답 보기: https://tsch.js.org/43/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- union 타입들 중에서 특정한 것을 제외해야한다.

1. 제네릭은 두개의 타입 변수를 받아야 할 것 같다.

```ts
type MyExclude<T, U>
```

2. 조건을 걸어서 조건에 맞을때 / 맞지 않을때를 구별해내서 반환해주기위해 삼항연산자를 사용해보았다.

```ts
type MyExclude<T, U> = ... ? never : T;
```

3. 두번째로 들어오는 것이 아닌 것들만을 추출하기 위해서 조건을 걸어주었다.

```ts
type MyExclude<T, U> = T extends U ? never : T;
```
