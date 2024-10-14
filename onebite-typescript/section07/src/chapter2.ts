/**
 * map, forEach 메서드 타입 정의하기
 */
// [1] map
// JS의 map 메서드 사용 예시
// 배열의 요소들 각각에 콜백 함수를 수행한 결과를 새로운 배열로 반환.
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]
// map 메서드 정의하기
// 타입 변수 T를 사용해서 다음과 같이 적용 가능.
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i=0; i < arr.length; i++) {
    result.push(
      callback(arr[i])
    );
  }

  return result;
}
// Ex1> number
map(arr, (it) => it * 2); 
// Ex2> string
map(["hi", "hello"], (it) => it.toUpperCase()); 
// Ex3> string, number
// 콜백함수의 반환값까지 string일 필요는 없으므로 타입 변수를 두 개 사용!
map(["hi", "hello"], (it) => parseInt(it)); 


// [2] forEach
// 반환은 없고, 콜백함수만 수행하는 메서드.
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
// forEach 메서드 정의하기
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i=0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr2, (it) => {
  console.log(it.toFixed());
})