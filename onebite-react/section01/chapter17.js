// 1. 배열 생성
// 값의 종류나 길이에 제한이 없음.
// 한 배열에 서로 다른 자료형의 값들이 들어가도 상관 없음.
let arrA = new Array(); // 배열 생성자
let arrB = [];  // 배열 리터럴 => 대부분 사용하는 방식

let arrC = [
  1,  // Number
  2, 
  3,
  true, // boolean
  "hello",  // string
  null,
  undefined,
  () => {}, // 함수
  {}, // 객체
  [], // 배열
];

// 2. 배열 요소 접근
// 인덱스를 활용해서 접근.
// 인덱스는 0부터 시작.
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2);  // 1 2

// 3. 배열 요소 수정
// 배열 요소 접근 방식과 마찬가지로 인덱스를 활용해서 수정 가능.
arrC[0] = "hello";