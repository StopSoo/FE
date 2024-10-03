// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "stopsoo"];
// 제네릭 문법을 사용
let boolArr: Array<boolean> = [true, false, true];  
// 배열 요소들의 타입이 다양할 경우 => 유니온을 이용해 다음과 같의 정의
let multiArr: (string | number)[] = [1, "hello"]; 
// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][]= [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// JS에는 없고 TS에만 있음!
// 길이와 타입이 고정된 배열 => 따라서 길이나 타입이 일치하지 않는 배열은 할당할 수 없다.
// 하지만 튜플도 배열이므로, push/pop 메서드를 사용할 수 있다. 오류가 발생하지 않음!
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// 다양한 타입들을 한 튜플에서 정의 가능.
let tup2: [number, string, boolean] = [1, "2", true];

// 튜플을 적용하기 좋은 예시
// 미리 위치에 따른 타입을 정해놓으면, 값을 잘못 넣는 것을 방지할 수 있다. 
const users: [string, number][] = [
  ["정지수", 1],
  ["정수영", 2],
  ["이시은", 3],
  // [4, "최보경"],
];