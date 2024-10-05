/**
 * 대수 타입
 * - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합 타입, 교집합 타입이 존재.
 */

/**
 * 합집합: Union 타입
 * - |를 이용해서 추가할 수 있는 타입의 개수는 무한대.
 */
let a: string | number; // string number union type => 둘 타입 모두 가능.
a = 1;  // number
a = "hello";  // string

let arr: (number | string | boolean)[] = [1, "hello", true];  // 배열에 대해서는 이와 같이 정의.
// 객체
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
let union1: Union1 = {  // Dog
  name: "",
  color: ""
};
let union2: Union1 = {  // Person
  name: "",
  language: ""
};
let union3: Union1 = {  // Dog | Person
  name: "",
  color: "",
  language: ""
};
// let union4: Union1 = {  // X => 두 타입의 공통 프로퍼티만 가지는 객체는 생성 불가.
//  name: "",
// };

/**
 * 교집합: Intersection 타입
 * - & 기호를 사용.
 */
let variable: number & string;  // never type => 그래서 이렇게 잘 사용 안 함.

type Intersection = Dog & Person;
let intersection1: Intersection = {
  // 세 property 중 하나라도 빠지면 선언할 수 없음.
  name: "",
  color: "",
  language: ""
};