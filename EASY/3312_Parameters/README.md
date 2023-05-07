### 📌 Parameters 구현하기

```ts
/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #쉬움 #infer #tuple #built-in

  ### 질문

  내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

  예시:

  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
 

  > GitHub에서 보기: https://tsch.js.org/3312/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 예시 코드
// type MyParameters<T extends (...args: any[]) => any> = any
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never;  

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3312/answer/ko
  > 정답 보기: https://tsch.js.org/3312/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
```


#### ⭐️ 구현 방법

시작전에 생각했던 힌트
- 인자로 들어올 T 를 함수의 타입으로 제한
- T 의 파라미터의 타입을 반환

1. `typeof` 함수는 `T extends (...args: any[]) => any` 형태를 가진다. 이 부분을 기억하고 넘어가야한다.

```ts
type MyParameters<T extends (...args: any[]) => any> = any
```

2. 인자로 들어올 T를 `함수` 의 타입으로 제한하며 인자의 타입을 가져오기 위해 `args` 를 가져옴

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: ...)
```

3. `T` 의 파라미터의 타입을 반환하며 `infer` 를 사용해 `args`의 타입 추론

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never; 
```

>#### 출처
https://github.com/type-challenges/type-challenges