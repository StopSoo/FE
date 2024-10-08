/**
 * 인터페이스
 * - 타입 별칭과 타입을 정의하는 문법들만 다를 뿐 기본 기능은 같다. 
 * - 함수는 다음과 같이 인터페이스에 두 가지 방식으로 정의할 수 있다. 이 때, 함수의 이름은 반드시 붙여줘야 한다.
 * - 함수를 오버로딩하고 싶다면, 함수 선언 시 함수 타입 표현식이 아닌 호출 시그니처를 사용해야 한다. 
 * - 유니온이나 인터섹션 타입 생성 불가.
 */
interface Person {
  readonly name: string;
  age?: number; // optional variable
  sayHi: () => void;  // 함수 타입 표현식
  sayHi2(): void; // 호출 시그니처
  sayHi2(a: number, b: number): void; // 함수 오버로딩
}

const person: Person = {
  name: "정지수",
  // age: 26,
  sayHi: function () {
    console.log("Hi");
  },
  sayHi2: function () {
    console.log("Hi");
  },
}

person.sayHi2(1, 2);  // 함수 오버로딩 사용