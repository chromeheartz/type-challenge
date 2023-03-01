### 📌 Readonly 구현하기

TypeScript의 타입 시스템은 인터페이스 속성을 readonly (읽기 전용)으로 지정할 수 있게 주며 이를 통해 함수형 방식이 가능해진다.

```ts
/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #쉬움 #built-in #readonly #object-keys

  ### 질문

  `T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

  예시:

  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property

  > GitHub에서 보기: https://tsch.js.org/7/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/7/answer/ko
  > 정답 보기: https://tsch.js.org/7/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- readonly 키워드를 쓰자
- 맵드 타입(Mapped Type)을 사용해볼 수 있을것같다

1. 맵드 타입을 사용하기 위해 제네릭을 하나 넣어놓고, 여기서 나오는 값은 readonly가 되게 키워드 지정
```ts
type MyReadonly<T> = {
  readonly ...
}
```

2. 입력받은 T의 속성을 전부 불러오기 위해 `K in keyof T`를 사용
```ts
type MyReadonly<T> = {
  readonly  [K in keyof T]: ...
}
```

3. 속성에 맞는 타입을 넣어주었다.
```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
```

⭐️ 결국 `[K in keyof T]: T[K]`를 하게 되면 T와 똑같은 인터페이스를 만드는것이다.

>#### 출처
https://github.com/type-challenges/type-challenges
