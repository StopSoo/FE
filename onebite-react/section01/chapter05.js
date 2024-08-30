// 1. Number Type
// 웬만한 숫자 모두 가능
// 연산 가능
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // modular 연산

let inf = Infinity; // 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN;  // Not a Number
console.log(1 * "hello"); // NaN

// 2. String Type
// 쌍따옴표 or 작은 따옴표
let myName = "정지수";
let myLocation = "양주";
// 문자열끼리 덧셈 연산 가능
let introduce = myName + " " + myLocation;
console.log(introduce);
// Template Literal Grammar : 백틱(`)과 ${}를 이용해 문자열을 동적으로 활용 가능
let introduceText = `${myName}는 ${myLocation}에 거주한다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
// 아무 것도 없다
let empty = null;

// 5. Undefined Type
// 값을 초기화하지 않았을 때, 자동으로 할당되는 값
let none;
console.log(none);  // undefined