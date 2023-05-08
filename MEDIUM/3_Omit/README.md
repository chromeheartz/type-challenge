### 📌 Omit 구현하기

```ts
/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #보통 #union #built-in

  ### 질문

  `T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.

  예시:

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }

  > GitHub에서 보기: https://tsch.js.org/3/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 예시 코드
// type MyOmit<T, K> = any
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] };

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3/answer/ko
  > 정답 보기: https://tsch.js.org/3/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트
T에서 K 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 Omit<T, K>를 이를 사용하지 않고 구현하세요.

- 오브젝트의 각 프로퍼티를 순회하며 새로운 오브젝트를 만들기
- `as`를 통해 필요하지 않은 키에 대한 필터링을 거친 후 키 리매핑하기

1. 오브젝트의 각 프로퍼티를 순회하며 새로운 오브젝트를 만들기
	- `T` 의 모든 키를 `매핑` 을 통해 새로운 오브젝트 타입 `P` 로 만듬
    - 키에 대한 값은 `T[P]` 로 저장
    
```ts
type MyOmit<T, K extends keyof T> = { [P in keyof T] : T[P] };
```

2. `as` 를 통해서 필요하지 않은 키에 대한 필터링. 키 리패핑
	- `프로퍼티`가 K에 속할 경우 `never`를 반환하도록 함
```ts
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P] : T[P] };
```


>#### 출처
https://github.com/type-challenges/type-challenges