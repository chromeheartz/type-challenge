/* _____________ Your Code Here _____________ */

type First<T extends any[]> = T extends [] ? never : T[0];