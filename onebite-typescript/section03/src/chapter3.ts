/**
 * 기본 타입 간의 호환성
 */
let num1: number = 10;  // number 타입
let num2: 10 = 10;  // number literal 타입

num1 = num2;  // 업캐스팅
// num2 = num1; // 다운캐스팅

/**
 * 객체 타입 간의 호환성
 * - 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 * - 구조적 타입 시스템 => 프로퍼티를 기준으로 업/다운 캐스팅이 결정됨.
 */
type Animal = { // 슈퍼 타입
  name: string;
  color: string;
};

type Dog = {  // 서브 타입
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업캐스팅
// dog = animal; // 다운캐스팅

/**
 * 초과 프로퍼티 검사
 * - 변수 초기화 시 값으로 객체 리터럴을 사용하면 발동되는 검사.
 * - 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하는 것을 막는 검사.
 */

let dog2: Animal = {
  name: "바둑이",
  color: "white",
  // breed: "진도", // 초과 프로퍼티 검사가 발동.
};

let dog3: Animal = dog; // 객체 리터럴을 사용하지 않았기 때문에 이와 같은 방식으로 변수를 초기화하는 것은 허용됨.