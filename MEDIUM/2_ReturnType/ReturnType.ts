/* _____________ Your Code Here _____________ */
type MyReturnType<T> = T extends (...args: any[]) => infer K ? K : never;