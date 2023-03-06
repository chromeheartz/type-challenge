### 📌 Length of Tuple 구현하기

```ts
/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #쉬움 #tuple

  ### 질문

  배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

  예시:

  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5

  > GitHub에서 보기: https://tsch.js.org/18/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 예시코드
// type Length<T> = any
type Length<T extends readonly unknown[]> = T['length']

/* _____________ 테스트 케이스 _____________ */
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

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18/answer/ko
  > 정답 보기: https://tsch.js.org/18/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- 배열의 길이에 접근할 수 있어야 할것같다

1. `length` 프로퍼티로 배열 길이에 접근해보았다

```ts
type Length<T> = T['length'];
```

2. length값을 받아올 수 있었지만, 모든 유형에 대한 length값을 리턴해야 했기 때문에 일부 유형에서는 오류가 발생했다.
따라서 `extends readonly any[]`로 모든 유형의 배열이 올 수 있도록 처리 ⭐️ `any[]부분이 unknown[]`으로 바뀌어도 해당 예제에서는 오류가안남

```ts
type Length<T extends readonly any[]> = T['length']
// type Length<T extends readonly unknown[]> = T['length']
```

⭐️ 모든 유형에 대해서 값을 리턴해야할 때 같은 더 넓게 생각할 필요.

>#### 출처
https://github.com/type-challenges/type-challenges