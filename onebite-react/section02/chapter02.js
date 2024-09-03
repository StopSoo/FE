// 단락 평가(Short-circuit Evaluation)
// &&나 || 연산에서 첫 번째 피연산자의 값만으로도 연산식 전체의 값을 결정할 수 있을 때, 두 번째 피연산자의 값에는 아예 접근하지 않는 특징
// truthy한 값이나 falsy한 값도 가능.
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // returnTrue() 함수는 실행 자체가 안되는 것을 확인할 수 있음

// 단락 평가 활용 사례
function printName(person) {
  // Ex1
  // person이 truthy한 값일 때만 person.name을 출력
  // 조건문을 통해 구별해야 했던 것을, 단락 평가를 통해 훨씬 간단하게 할 수 있음!
  console.log(person && person.name);

  // Ex2: 개선 버전
  // 비지 않은 문자열은 truthy한 값!
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();  // undefined
printName({ name: "정지수" });  // 정지수