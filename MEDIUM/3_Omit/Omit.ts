/* _____________ Your Code Here _____________ */
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P] : T[P] };