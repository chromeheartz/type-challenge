### 📌 Unshift 구현하기

```ts
/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #쉬움 #array

  ### 질문

  `Array.unshift`의 타입 버전을 구현하세요.

  예시:

  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
  

  > GitHub에서 보기: https://tsch.js.org/3060/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 예시 코드
// type Unshift<T, U> = any
type Unshift<T extends unknown[], U> = [U, ...T]

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3060/answer/ko
  > 정답 보기: https://tsch.js.org/3060/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트
- Push, Concat과 비슷한 맥락이다.

1. T, U 자리를 만들어주고 T는 모르는 타입의 리스트 일것이다

```ts
type Push<T extends unknown[], U> = ...
```

2. 분해 연산자를 이용해서 간단하게 기존에 있던 요소들 앞에 추가되도록 구현 Push와 반대로 해주면 된다.
```ts
type Push<T extends unknown[], U> = [U, ...T]
```
>#### 출처
https://github.com/type-challenges/type-challenges