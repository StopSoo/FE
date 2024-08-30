// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 우선 순위를 잘 따질 것!
// 사용자의 기호에 맞게 사용하기 위해서는, 괄호를 적절히 사용할 것
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
// +=, -=, *=, /=, %=
let num7 = 10;
num7 += 20;
console.log(num7);  // 30

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위 연산
num8++; // 후위 연산

// 5. 논리 연산자
let or = true || false; // true
let and = true && false;  // false
let not = !true;  // false

console.log(or, and, not);  // 세 값이 공백을 두고 출력됨

// 6. 비교 연산자
// '값'과 '값의 자료형' 모두를 비교
let comp1 = 1 === "1";  // false : 동등 비교 연산자
let comp2 = 1 !== 2;  // true : 비동등 비교 연산자
// 대소를 비교
let comp3 = 1 > 2;  // false
let comp4 = 1 < 2;  // true
console.log(comp3, comp4);  // 두 값이 공백을 두고 출력됨