/**
 * keyof 연산자
 * - keyof 타입명
 * - 객체의 모든 프로퍼티들을 통용.
 * - 무조건 타입에만 사용 가능. 선언한 객체에 사용 불가.
 */
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "정지수",
  age: 26,
}

getPropertyKey(person, "name"); // 정지수

/**
 * typeof 연산자 활용하기
 * - 특정 변수의 타입을 뽑아내는 용도로 사용 가능.
 */
type Person2 = typeof person;
// 다음과 같이 사용 가능.
// keyof Person2 === keyof typeof person