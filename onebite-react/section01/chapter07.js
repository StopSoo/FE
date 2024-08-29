// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 우선 순위를 잘 따질 것 !
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;

// 4. 증감 연산자
// 전위, 후위
let num8 = 10;
++num8;
num8++;

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);  // true false false 

// 6. 비교 연산자
// 값과 값의 자료형 모두를 비교
let comp1 = 1 === "1";  // false : 동등 비교 연산자
let comp2 = 1 !== 2;  // true : 비동등 비교 연산자

let comp3 = 1 > 2;
let comp4 = 1 < 2;
console.log(comp3, comp4);  // false true