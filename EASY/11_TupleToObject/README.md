### 📌 Tuple to Object 구현하기

```ts
/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #쉬움 #object-keys

  ### 질문

  배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

  예시:

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

  > GitHub에서 보기: https://tsch.js.org/11/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 문제 예시
// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/11/answer/ko
  > 정답 보기: https://tsch.js.org/11/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- `tuple` 에서 무언가 빼올 수 있는 키워드가 있을까
- key value를 똑같이 넣어주는것이 중요

1. 일단 any 부분을 빼주고 순회하여 value값을 똑같이 넣으려고 시도해보았다

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[keyof T]] : K
}
```

2. `keyof T` 를 실행하니 `'string | number | symbol'` 타입으로 지정되어 `T[number]`로 정리

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]] : K
}
```

3. 하단 코드의 `@ts-expect-error` 부분에서 에러를 띄워주는 이유를 생각해보다가 결국 정답을 보니
`any[]` 가 아닌 `PropertyKey[]`로 제네릭 자리에 넣어주었다

```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
   [K in T[number]] : K
}
```

⭐️ Easy라고 되어있지만 꽤나 Easy하지 않은 문제.. PropertyKey를 포함해서 한번 더 타입 구현에 대해서 되돌아볼 필요가 있다.

>#### 출처
https://github.com/type-challenges/type-challenges