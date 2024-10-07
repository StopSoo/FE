/**
 * 함수 타입 표현식(Function Type Expression)
 * - 타입 별칭을 이용해 함수의 타입을 표현하고, 이를 선언한 함수의 타입으로 지정.
 */
// 다음과 같이 타입 별칭을 범용적으로 사용할 수도 있다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (콜 시그니처)
 * - JS의 함수도 객체 타입이기 때문에 다음과 같이 사용하는 것.
 */
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;