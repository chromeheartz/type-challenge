### 📌 First of Array 구현하기

```ts
/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #쉬움 #array

  ### 질문

  배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

  예시:

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

  > GitHub에서 보기: https://tsch.js.org/14/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 문제 예시
// type First<T extends any[]> = any

type First<T extends any[]> = T extends [] ? never : T[0];

/* _____________ 테스트 케이스 _____________ */
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

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/14/answer/ko
  > 정답 보기: https://tsch.js.org/14/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- 배열의 첫번째 원소를 가져오는것이면 `제네릭[0]` 이 되지 않을까.
- 빈 배열을 체크해보아야할것같다.

1. `인덱스 접근` 을 통해서 배열(튜플)을 인자로 받아서 `T[0]` 을 시도

```ts
type First<T extends any[]> = T[0]
```

2. `Expect<Equal<First<[]>, never>>,` 빈배열일경우에 에러가 발생.
빈 배열을 체크하기 위해서 `삼항 연산자` 사용. 빈 배열일때는 `never`

```ts
type First<T extends any[]> = ... ? never : T[0]
```

3. `T extends []` 를 통해서 받은 `T` 가 배열의 속성을 갖도록 하였다

```ts
type First<T extends any[]> = T extends [] ? never : T[0]
```

⭐️ 시작 힌트 접근은 좋았으나, `T extends []` 를 사용해서 배열의 속성을 갖도록 하는 부분이 조금 헷갈렸다.

>#### 출처
https://github.com/type-challenges/type-challenges