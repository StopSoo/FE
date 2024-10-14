/**
 * 타입 변수 응용하기
 */
// 사례 1: 두 개 이상의 타입 변수를 사용해야 할 때.
// 필요한 만큼 여러 개의 타입 변수를 제네릭으로 선언해서 사용하면 된다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

// 사례 2: 타입 변수에 배열, 튜플 타입을 적용할 때.
// Ex1> 다음과 같이 매개변수의 타입에는 타입 변수+배열/튜플을 사용한다.
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue([0, 1, 2]);  // 0
let str = returnFirstValue(["hello", "myNameIs", "JiSoo"]); // hello

// Ex2> 첫 번째 요소를 제외한 다른 요소들의 타입은 궁금하지 않을 때.
// rest 키워드를 사용해서 다음과 같이 처리
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let str2 = returnFirstValue2([1, "hello", "myNameIs", "JiSoo"]);  // str2의 타입이 number로 잘 추론됨

// 사례 3: 타입 변수의 조건을 설정할 때.
// extends 키워드를 사용해서 조건을 설정.
function getLength<T extends { length: number }>(data: T) {
  // length가 number인 property를 갖고 있는 T라는 타입 변수를 사용.
  return data.length;
}
let var1 = getLength([1, 2, 3]);  // 3
let var2 = getLength(["12345"]);  // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10);  // length property가 없기 때문에 사용 불가능.