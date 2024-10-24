/**
 * infer
 * - 특정 타입만 추론하는 기능
 */
type FuncA = () => string;
type FuncB = () => number;
// 목적: 함수의 리턴 타입을 반환하도록 함.
// 여기서 R은 'T extends () => infer'가 참이 되도록 동작함.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>;  // never

// 예제
// 1. T는 Promise 타입이어야 함.
// 2. Promise 타입의 결과값 타입을 반환해야 함.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string