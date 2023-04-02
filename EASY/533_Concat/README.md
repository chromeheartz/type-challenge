### 📌 Concat 구현하기

```ts
/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #쉬움 #array

  ### 질문

  JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

  예시:

  type Result = Concat<[1], [2]> // expected to be [1, 2]

  > GitHub에서 보기: https://tsch.js.org/533/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 예시코드
// type Concat<T, U> = any
type Concat<T extends any[], U extends any[]> = [...T, ...U]

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/533/answer/ko
  > 정답 보기: https://tsch.js.org/533/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```


#### ⭐️ 구현 방법

시작전에 생각했던 힌트
- 서로 다른 배열을 하나의 배열로 합쳐주면 되니 `구조분해할당` 을 사용할 수 있을것이다.

1. 일단 반환값은 any가 아닌 배열의 형태일것이다

```ts
type Concat<T, U> = []
```

2. T,U `제네릭` 자리에 각각 `extends any[]`를 넣어주어 리스트가 들어오도록 제한을 걸어줌.

```ts
type Concat<T extends any[], U extends any[]> = []
```

3. 이제 반환하는 값이 하나의 배열안에 T,U 배열이 들어가야하니 구조분해할당으로 풀어준다

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U]
```

⭐️ TS,JS 문법들이 각각 적절히 섞여있어서 재밌는 예제였다.

>#### 출처
https://github.com/type-challenges/type-challenges