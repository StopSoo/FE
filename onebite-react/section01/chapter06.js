// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 시키는 것
let num = 10;
let str = "20";

const result = num + str; // num에 들어 있는 10이 "10"으로 변환됨
// console.log(result);  // 1020

// 2. 명시적 형 변환
// 프로그래머 내장 함수 등을 이용해 직접 형 변환을 명시
// 2-1. 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // Number()라는 내장함수를 이용해 문자열을 숫자로 변환
console.log(10 + strToNum1);  // 20

let str2 = "10개";
let strToNum2 = Number(str2); // 문자열에 숫자 이외에 문자도 포함되어 있음
console.log(strToNum2); // NaN 

let strToNum3 = parseInt(str2); // 문자열 내 숫자만 숫자로 변환 but 문자로 시작하면 형 변환이 잘 안 될 수도 있음 (!)
console.log(strToNum3); // 10

// 2-2. 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다."); // "20" + "입니다."
