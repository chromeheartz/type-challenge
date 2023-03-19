### 📌 Awaited 구현하기

```ts
/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise #built-in

  ### Question

  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

  For example: if we have `Promise<ExampleType>` how to get ExampleType?


  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string

  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */

// 예시코드
// type MyAwaited<T> = any
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<infer K> ? K : U : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/189/answer
  > View solutions: https://tsch.js.org/189/solutions
  > More Challenges: https://tsch.js.org
*/

```

#### ⭐️ 구현 방법

시작전에 생각했던 힌트

- Promise로 들어온 타입을 Promise 해제된 타입으로 변환해야한다.

1. Promise 타입이 아닐 경우 에러가 발생하기 때문에 제네릭에 extends로 타입 제한을 건다.

```ts
type MyAwaited<T extends PromiseLike<any>> = any
```

2. Promise안에 담긴 타입을 알아내기 위해 `infer` 라는 타입추론 키워드를 사용.
📍 `infer K` 라고 하게되면 K의 타입을 추론하라는 뜻.

```ts
type MyAwaited<T extends PromiseLike<any>> = infer U
```

3. 3항 연산자를 사용하여 타입을 추론하면 true 조건 / 아니면 false 조건으로 실행.
Promise안에 제네릭으로 감싸진 타입을 추론하고 싶은 것이므로 `T extends Promise<infer U>`

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? ... : ...
```

4. 타입이 추론되면 U 그렇지 않으면 never로 지정

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : never
```

5. 4번까지 하면 대부분 정리가 되겠지만 Promise 이중 래핑된 구조에서는 원하는 답을 얻기 힘들다. 이중 Promise를 풀어낸 타입이어야 하기 때문
`Promise<Promise<string | number>>` => `string | number`
따라서 infer를 사용해 Promise안에 타입이 또 있는지에 대한 검사를 진행

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U extends PromiseLike<infer K> ? MyAwaited<U> : U : never;
```

⭐️ 추가로 Promise 타입이 아닐 때 에러가 발생하지 않아도 된다면, 재귀적으로 사용 가능
```ts
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
```

#### 다른분이 입력한 답.

의도를 생각하면서 한번 정리해보는 것이 좋을것같다.
더 좋은 답이라고 생각.

```ts
type RecursivePromise<T> = T extends PromiseLike<infer U>
  ? RecursivePromise<U>
  : T
type MyAwaited<T extends PromiseLike<any>> = RecursivePromise<T>
```

⭐️ 생각보다 많이 어려웠다. 아직은 익숙하지 않은 Promise관련해서의 공부가 조금 더 필요하다.

>#### 출처
https://github.com/type-challenges/type-challenges