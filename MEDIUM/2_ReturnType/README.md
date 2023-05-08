### 📌 Return Type 구현하기

```ts
/*
  2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #보통 #infer #built-in

  ### 질문

  내장 제네릭 `ReturnType<T>`을 이를 사용하지 않고 구현하세요.

  예시:
  
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"

  > GitHub에서 보기: https://tsch.js.org/2/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
// 예시 코드
// type MyReturnType<T> = any
type MyReturnType<T> = T extends (...args: any[]) => infer K ? K : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/2/answer/ko
  > 정답 보기: https://tsch.js.org/2/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
```


#### ⭐️ 구현 방법

1. 함수의 인자가 있는 케이스를 위해서 `args` 를 사용
 
```ts
type MyRetrunType<T> = T extends(...args: any[]) => any
```
  
2. `T`가 `K`를 리턴하는 함수를 상속한다면, `K`를 리턴하고 아니면 `never`를 리턴한다.
 
```ts
type MyReturnType<T> = T extends (...args: any[]) => infer K ? K : never;
```
  
⭐️ `() => infer K` 는 함수의 인자가 없는 함수를 가리킨다.

>#### 출처
https://github.com/type-challenges/type-challenges