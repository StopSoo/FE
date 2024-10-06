/**
 * 타입 추론
 * - TS는 '점진적인 타입 시스템'을 채택. => 변수의 초기값을 기준으로 변수의 타입을 추론.
 */

// 1. 일반적인 변수 선언 상황.
// 초기값을 기준으로 변수의 타입을 추론한다. 복잡하더라도 잘 추론함!
// 함수의 타입은 반환값을 기준으로 추론한다. 단, 매개변수는 반드시 타입을 지정해주어야 한다.
let a: number = 10;
let [one, two, three] = [1, "hello", true];

function func() { // string type
  return "hello";
}

// 2. 쉽게 추론하기 어려운 상황
let b;  // any
b = "hi"; // 따라서 아무런 값이나 넣을 수 있음.
b.toUpperCase();  // 여기서 b는 string 값으로 추론됨.

b = 3;  // 또 다른 타입의 값을 할당하는 것이 가능.
b.toFixed();  // number 타입으로 추론되므로, number 타입의 메서드 사용이 가능.

// 3. const 키워드를 사용할 경우.
const num = 10; // number literal
const str = "hello";  // string literal

let arr = [1, "string"];  // (string | number)[]