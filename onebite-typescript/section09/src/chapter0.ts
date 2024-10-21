/**
 * 조건부 타입
 * - extends 확장 키워드와 ? : 삼항 연산자를 이용.
 */
// Ex1
// number 타입은 string 타입의 서브 타입이 아니기 때문에 거짓.
type A = number extends string ? string : number; // number

// Ex2
type ObjA = {
  a: number;
}

type ObjB = {
  a: number;
  b: number;
} 
// ObjA 타입은 ObjB 타입의 슈퍼 타입이기 때문에 참.
type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 * - 타입을 가변적으로 사용하면서도, 논리의 흐름에 따른 타입 변경이 가능하다. 
 */
// Ex1
// number <-> string 스위치 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number 

// Ex2
// 1) string 객체에서 모든 공백을 찾아 제거하는 함수.
function removeSpaces(text: string) {
  // replaceAll(x, y): string 객체에서 모든 x를 y로 변경.
  return text.replaceAll(" ", "");
}
// 2) text의 타입이 유니온 타입일 때는 제네릭을 사용한다.
// 반환값의 타입을 'T extends string ? string : undefined' 했을 때 return문에서 오류.
// => Why) 함수 내부에서는 타입 변수 T도 unknown 타입이기 때문에, 반환값의 타입을 알 수 없는 상태. 
// => 해결) any로 단언할 바엔 구현 시그니처를 작성하자(!)
function removeSpaces2<T>(text: T): T extends string ? string : undefined;  // 구현 시그니처
function removeSpaces2(text: any) { // 여기서 text는 any 타입으로 작성.
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces2("hi im stopsoo");
result.toUpperCase();

let result2 = removeSpaces2(undefined);