### 📌 Pick 구현하기

픽 타입은 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의한다.

```ts
/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #쉬움 #union #built-in

  ### 질문

  `T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

  예시:

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }

  > GitHub에서 보기: https://tsch.js.org/4/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트
- Pick은 받아야하는 인자가 두개가 있으니 제네릭을 2개쓰면 될것이다
- 두번째 제네릭에 들어갈 값은 첫번째 제네릭에 있는 속성일테니 부분집합이여야한다(상속개념 필요)

1. 제네릭을 2개 만들어놓고 extends로 부분집합으로 만들어주었다
```ts
type MyPick<T, K extends keyof T> = {...}
```

2. K가 T에 있는 속성들의 값일테니 `T[Key]`를 타입에 넣어주었다
```ts
type MyPick<T, K extends keyof T> = {
  ...: T[Key]
}
```

3. 마지막으로 키값은 K에 있는 키값으로 잡아주어 마무리
```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
```

>#### 출처
https://github.com/type-challenges/type-challenges