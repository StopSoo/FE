// 1. null 병합 연산자 (!)
// 존재하는 값(null, undefined 제외)을 추려내는 기능

let var1;
let var2 = 10;
let var3 = 20;

// var1이 undefined이기 때문에 뒤에 오는 변수의 값이 할당됨
let var4 = var1 ?? var2;
console.log(var4);  // 10
let var5 = var1 ?? var3;  
console.log(var5);  // 20

// 두 변수 모두 undefined나 null이 아니라면 앞 변수의 값이 할당됨
let var6 = var2 ?? var3;
console.log(var6);  // 10 -> var2의 값

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능
// 괄호 없이 사용

let var7 = 1;
var7 = "hello"; // 변수의 타입이 정해져 있지 않음.

let t1 = typeof var7; 
console.log(t1);  // string

// 3. 삼항 연산자

let var8 = 1 > 2 ? 3 : 4;
console.log(var8);

let result = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(result);  // 짝수
