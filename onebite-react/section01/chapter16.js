// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = {a: "1"} => 상수 객체에 아예 새로운 값을 할당하는 것은 불가능 !! 
// 아래와 같이 추가, 수정, 삭제는 가능 (!)
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color;  // 삭제

// 2. 메서드
// 값이 함수인 프로퍼티
// 객체의 동작을 정의.
const person = {
  name: "정지수",
  // 메서드
  // 익명 함수, 화살표 함수 등 단축된 형태 모두 가능
  sayHi: function () {
    console.log("안녕!");
  },
  // 메서드의 가장 단축된 형태
  // sayHi() {
  //   console.log("안녕!");
  // }
};

// 객체의 메서드 실행 
person.sayHi(); 
person["sayHi"]();