// 5가지 배열 변형 메서드
// 1. filter
// 자주 사용됨!
// 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열로 변환.

let arr1 = [
  {name: "정지수", hobby: "독서"},
  {name: "정수영", hobby: "독서"},
  {name: "이시은", hobby: "꽃꽂이"},
];
// 해당 객체들을 담는 새로운 배열이 저장됨.
const ReadingBookPeople = arr1.filter((item) => {
  if (item.hobby === "독서") return true;
  // 더 간단하게 표현 가능
  // (item) => item.hobby === "독서"
});

// 2. map
// 진짜 자주 사용됨!
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환.
let arr2 = [1, 2, 3];
// item * 2 값들이 저장된 새로운 배열이 생성됨
const mapResult1 = arr2.map((item, idx, arr) => { // [2, 4, 6]
  // console.log(idx, item);
  return item * 2;  // 반환갑 설정 가능
});

let names = arr1.map((item) => item.name); // ['정지수', '정수영', '이시은']

// 3. sort
// 원본 배열을 "사전 순"으로 정렬.
let arr3 = ['b', 'a', 'c'];
arr3.sort();  // ['a', 'b', 'c']
// 문자 값이 아닌 숫자로 배열을 구성할 경우, sort() 메서드가 제대로 동작하지 않음.
let arr4 = [3, 10, 5];
arr3.sort((a, b) => { // 숫자의 대소 비교를 할 수 있는 콜백함수를 넣어줄 것.
  if (a > b) {
    // 오름차순 (양수를 반환)
    return 1;
  } else if (a < b) {
    // 내림차순 (음수를 반환)
    return -1;
  } else return 0;  // 자리 변경 X
})

// 4. toSorted
// 원본 배열은 변경시키지 않고, 정렬된 새로운 배열을 반환. 
let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

// 5. join 
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환.
let arr6 = ["hi", "im", "jisoo"];
const joined = arr6.join(" ");  // 괄호 안에는 separator를 넣을 것.(기본은 콤마!)