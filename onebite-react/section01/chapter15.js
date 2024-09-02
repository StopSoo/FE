// 1. 객체 생성
let obj1 = new Object();  // 객체 생성자
let obj2 = {};  // 객체 리터럴 => 대부분 이 방법을 사용

// 2. 객체 프로퍼티 (객체 속성)
// key: value 형태
// 프로퍼티의 개수에는 제한이 없음
// key
// - 문자열, 숫자만 가능.
// - 보통 쌍따옴표 없이 사용 가능하나, 띄어쓰기가 존재하는 문자열은 쌍따옴표 필수.
// value
// - 값에 제한이 없음. (객체, 함수 등 뭐든지 가능)
let person = {
  name: "정지수",
  age: 26,
  hobby: "독서",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 : 점 표기법, 괄호 표기법
// 존재하지 않는 프로퍼티에 접근할 경우, undefined를 반환.
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property]; // 독서

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Developer";  // 점 표기법
person["favoriteFood"] = "떡볶이"; // 괄호 표기법
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
// delete 키워드를 사용
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
// in 키워드를 사용
// true or false를 반환
let result = "name" in person;  // true

if (result) {
  console.log("name property가 객체 person 안에 존재합니다.");
} else {
  console.log("name property가 객체 person 안에 존재하지 않습니다.");
}