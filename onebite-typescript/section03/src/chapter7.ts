/**
 * 타입 좁히기
 * - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로.
 * - 타입을 상황에 따라 좁히는 방법.
 */
type Person = {
  name: string;
  age: number;
};

// value => number type: toFixed()
// value => string type: toUpperCase()
// value => Date type: getTime()
// value => Person type: 'name은 age살입니다.' 출력
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {  // typeof는 타입 가드의 역할을 함.
    // 이 중괄호 안에서는 value의 타입이 number로 추론됨.
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    // 이 중괄호 안에서는 value의 타입이 string으로 추론됨.
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // typeof 연산자를 써서 object인지 물어본다면 오류가 발생!
    // Date와 null이 모두 object이기 때문.
    // 따라서 instanceof 연산자를 통해 위와 같이 조건을 작성.
    // 변수가 Date class의 instance인지를 확인.
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value가 존재하고(null이 아니고), age property가 value에 존재하는지(Person 객체인지).
    // 이렇게 하는 이유는 Person이 JS의 내장 클래스가 아니라, 직접 선언한 타입이기 때문.
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
} 