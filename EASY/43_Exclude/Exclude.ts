/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T;