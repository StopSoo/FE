// 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;  // 지역 스코프
  console.log(a);

  function funcB() {} // 함수 안에서 함수 선언 => 지역 스코프 (!)
}

funcA();
console.log(b); // b를 찾을 수 없다는 오류 발생

// for문이나 if문 등 블록을 갖는 조건문 내에 선언된 변수들은 모두 지역 스코프를 가짐.
if (true) {
  let c = 1;  // 지역 스코프

  function funcB() {} // 조건문 내에서 함수 선언 => 전역 스코프 (!)
}