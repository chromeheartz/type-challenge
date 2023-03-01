
/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}