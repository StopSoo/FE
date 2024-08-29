// 1. 배열 생성
// 값의 종류나 길이에 제한이 없음.
let arrA = new Array(); // 배열 생성자
let arrB = [];  // 배열 리터럴 => 대부분 사용하는 방식

let arrC = [
  1, 
  2, 
  3,
  true,
  "hello",
  null,
  undefined,
  () => {},
  {},
  [],
];

// 2. 배열 요소 접근
// 인덱스를 활용해서 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);  // 1 2

// 3. 배열 요소 수정
arrC[0] = "hello";