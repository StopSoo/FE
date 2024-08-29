// 1. 객체 생성
let obj1 = new Object();  // 객체 생성자
let obj2 = {};  // 객체 리터럴 => 대부분 이 방법을 사용

// 2. 객체 프로퍼티 (객체 속성)
// key: value 형태
// key
// - 문자열, 숫자만 가능.
// - 보통 쌍따옴표 없이 사용 가능하나, 띄어쓰기가 존재하는 문자열은 쌍따옴표 필수.
// value의 값은 제한이 없음.
let person = {
  name: "정지수",
  age: 26,
  hobby: "독서",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 : 점 표기법, 괄호 표기법
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property]; // 독서

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Developer";  // 점 표기법
person["favorite food"] = "떡볶이"; // 괄호 표기법

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favorite food"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
// delete 키워드를 사용
delete person.job;
delete person["favorite food"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
// in 키워드를 사용
// true or false를 반환
let result1 = "name" in person;
console.log(result1); // true
