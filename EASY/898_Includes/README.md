### 📌 Includes 구현하기

```ts
/*
  898 - Includes
  -------
  by null (@kynefuk) #쉬움 #array

  ### 질문

  JavaScript의 `Array.includes` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, `true` 또는 `false`를 반환해야 합니다.

  예시:

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

  > GitHub에서 보기: https://tsch.js.org/898/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 예시 코드
// type Includes<T extends readonly any[], U> = any
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/898/answer/ko
  > 정답 보기: https://tsch.js.org/898/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/


```

Equal<F, U> extends true ? : 첫 번째 원소 F와 U가 동일한지 확인하고 만약 true를 반환한다면

true : Includes<O, U> : false; : true를 반환하고, F와 U가 다르면 Include<O, U>를 실행하고, 그것도 아니라면 false를 반환한다.

#### ⭐️ 구현 방법

1. 튜플인 케이스에서의 오류를 없애기 위해 infer를 사용하며 삼항연산자를 이용했다.

```ts
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ?
  ... : ...
```

2. 첫 번째 원소 F와 U가 동일한지(만족하는지) 확인해보고 true를 반환한다면 true를 반환

```ts
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ?
  Equal<F, U> extends true ? true : ... : ...
```

3. 만약 true가 아니라면 (F와 U가 다르다면) Include<R, U> 를 실행하고, 그것도 아니라면 false반환

```ts
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
```


>#### 출처
https://github.com/type-challenges/type-challenges