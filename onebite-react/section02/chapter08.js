// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시킴.
// forEach 메서드 안에는 사용자가 원하는 특정 동작을 하는 콜백함수가 들어감.
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
})

// 2. includes
// 배열에 특정 요소가 있는지 확인.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // true
let isInclude2 = arr2.includes(10); // false

// 3. indexOf
// 배열의 앞부터 탐색하여, 특정 요소의 인덱스(위치)를 찾아서 반환.
// 만약 그 요소가 존재하지 않을 경우에는 -1을 반환.
// 객체의 특정 프로퍼티 값이 존재하는지는 찾아낼 수 없음(얕은 비교를 사용하기 때문) => findIndex를 사용할 것(!)
let arr3 = [1, 2, 3];
let index1 = arr3.indexOf(2); // 1

let arr4 = [2, 2, 2];
let index2 = arr3.indexOf(2); // 0

// 4. findIndex
// 모든 요소를 순회하면서, 인수로 전달된 콜백함수를 만족하는(참을 반환하는) 특정 요소의 인덱스(위치)를 반환.
// indexOf와 마찬가지로, 콜백함수에서 참을 반환하는 요소가 없을 경우 -1을 반환.
let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
}
  // 더욱 간단하게 쓸 경우!
  // (item) => item === 2
);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾음 but, 요소를 그대로 반환!!
let arr6 = [
  { name: "정지수" },
  { name: "정수영" },
  { name: "이시은" },
  { name: "서민우" },
];

const finded = arr6.find(
  (item) => item.name === "정지수"
);

console.log(finded);  // { name: "정지수" }