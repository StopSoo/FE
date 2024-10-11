/**
 * 제네릭
 * - T: 타입 변수, 인수의 타입에 따라 타입 변수의 타입이 달라짐.
 * - 이 때 타입 변수의 타입은 함수 호출 시 결정됨. 
 */
// 제네릭 함수
function func<T>(value: T): T {
  return value;
}
// 제네릭 사용을 통해 인수의 타입이 반환값의 타입이 됨.
let num = func(10);
let bool = func(true);
if (typeof num === "number") {
  num.toFixed();
}
// 타입 변수의 타입을 내가 정의하고 싶을 때
// Ex> 배열을 튜플로 정의하고 싶을 때
let arr = func<[number, number, number]>([1, 2, 3]);