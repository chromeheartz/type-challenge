### 📌 Push 구현하기

```ts
/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #쉬움 #array

  ### 질문

  `Array.push`의 제네릭 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > GitHub에서 보기: https://tsch.js.org/3057/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 예시 코드
// type Push<T, U> = any
type Push<T extends unknown[], U> = [...T, U]

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3057/answer/ko
  > 정답 보기: https://tsch.js.org/3057/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/


```


#### ⭐️ 구현 방법

시작전에 생각했던 힌트
- Concat과 비슷한 방법으로 구현하면 될것같다.

1. T, U 자리를 만들어주고 T는 모르는 타입의 리스트 일것이다

```ts
type Push<T extends unknown[], U> = ...
```

2. 분해 연산자를 이용해서 간단하게 기존에 있던 요소들 뒤에 추가되도록 구현
```ts
type Push<T extends unknown[], U> = [...T, U]
```

>#### 출처
https://github.com/type-challenges/type-challenges