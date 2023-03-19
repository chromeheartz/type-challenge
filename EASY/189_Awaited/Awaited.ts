
/* _____________ Your Code Here _____________ */

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U extends PromiseLike<infer K> ? MyAwaited<U> : U : never;