/* _____________ Your Code Here _____________ */

type If<C extends boolean, T, F> = C extends true ? T : F;