// number
let num1: number = 123; // 자연수(양수)
let num2: number = -123;  // 음수
let num3: number = 0.123; // 소수
let num4: number = Infinity;  // 무한대
let num5: number = NaN; // Not a Number

// string
let str1: string = "hello"; // 작은 따옴표, 큰 따옴표, 백틱 모두 상관X
let str2: string = `hello ${num1}`; // template string

// boolean
let bool1: boolean = true;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// "strictNullChecks": false로 설정하면 가능.
// let numA: number = null;

// literal type
// 변수의 타입을 값 자체로 정의.
// 다른 값을 할당할 수 없음.
let numA: 10 = 10;
let strA: "hello" = "hello";