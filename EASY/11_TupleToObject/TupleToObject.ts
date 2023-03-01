/* _____________ Your Code Here _____________ */
type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}