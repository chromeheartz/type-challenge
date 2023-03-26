### 📌 If 구현하기

```ts
/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #쉬움 #utils

  ### 질문

  조건 `C`, 참일 때 반환하는 타입 `T`, 거짓일 때 반환하는 타입 `F`를 받는 타입 `If`를 구현하세요. `C`는 `true` 또는 `false`이고, `T`와 `F`는 아무 타입입니다.

  예시:

  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'

  > GitHub에서 보기: https://tsch.js.org/268/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 예시코드
// type If<C, T, F> = any
type If<C extends boolean, T, F> = C extends true ? T : F;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/268/answer/ko
  > 정답 보기: https://tsch.js.org/268/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트
조건 C, 참일 때 반환하는 타입 T, 거짓일 때 반환하는 타입 F를 받는 타입 If를 구현하세요. C는 true 또는 false이고, T와 F는 아무 타입입니다.

- 3개의 타입 변수를 입력받을 것이다.
- 참일때 T, 거짓일 때 F 이기때문에 `삼항 연산자` 를 사용할 수 있을것같다

1. 예시코드에서 시작해서 일단 제네릭부분을 먼저 제한을 걸었다. C는 Bool값만 받을 수 있도록.

```ts
type If<C extends boolean, T, F> = any
```

2. 삼항 연산자 사용해서 참일 때와 거짓일 때를 구분

```ts
type If<C extends boolean, T, F> = ... ? T : F;
```

3. T가 true가 아니라면 F를 반환해야하니 ...의 조건을 `C extends true` 로 제한

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

⭐️ 이번것은 `extends` 키워드와 `삼항 연산자` 를 사용하면 비교적 쉬웠던 문제같다.

>#### 출처
https://github.com/type-challenges/type-challenges