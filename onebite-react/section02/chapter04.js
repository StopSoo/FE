/* 1. Spread 연산자 (...) */
// 흩뿌리다, 펼치다 라는 뜻.
// 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할.
// 배열의 원소들을 직접 사용할 경우, 추후에 배열 값들이 수정되었을 때 반영하기 어려움.

// - 배열에 적용
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];  // 4 1 2 3 5 6

// - 객체에 적용
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// - 함수에 적용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

/* 2. Rest 매개변수 (...) */
// 나머지 매개변수.
// 전달 받은 모든 인수들을 배열 형태로 받음.
// rest 매개변수는 매개변수 자리에서 항상 마지막에 존재해야 함(!)
// Spread 연산자와는 엄연히 다름(!)

function funcB(one, ...rest) {  // rest 매개변수
  // 전달 받은 인수들 중 첫 번째만 변수 one에 저장됨.
  console.log(one); // 1
  console.log(rest);  // [2, 3] => 배열
}

funcB(...arr1); // spread 연산자