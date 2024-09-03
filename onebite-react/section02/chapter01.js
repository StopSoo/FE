// Truthy & Falsy
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; // Not a Number
let f6 = "";  // 빈 문자열
let f7 = 0n;  // big integer

// 2. Truthy한 값
// 7가지의 falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello"; // 비어 있지 않은 문자열
let t2 = 123; // 숫자
let t3 = [];  // 빈 배열 
let t4 = {};  // 빈 객체
let t5 = () => {};  // 빈 함수

// 3. 활용 사례
function printName(person) {
  if (!person) {  // 예외 처리: person 객체가 falsy일 경우를 이렇게 간단하게 표현
    console.log("person의 값이 존재하지 않음");
    return;
  }
  console.log(person.name);
}

let person; // undefined
printName(person);