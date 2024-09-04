/* 1. 배열 순회 */
let arr = [1, 2, 3];

// 1.1 배열 인덱스를 이용한 순회 
// 인덱스를 활용해야 할 때 주로 사용.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1.2 for of 반복문을 이용한 순회
// 배열에서만 사용 가능(!)
for (let item of arr) {
  console.log(item);
}

/* 2. 객체 순회 */
let person = {
  name: "정지수",
  age: 26,
  hobby: "독서"
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환.
let keys = Object.keys(person);
for (let i=0; i < keys.length; i++) {
  console.log(keys[i]);
}

// 2.2 Object.values 사용
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환.
let values = Object.values(person);
for (let i=0; i < values.length; i++) {
  console.log(keys[i]);
}

// 2.3 key와 value를 동시에 표기.
for (let key of keys) {
  console.log(key, person[key]);
}

// 2.4 for in
// for of와 비슷하나, 객체에서만 사용 가능(!)
for (let key in person) { // person 객체의 key들을 변수 key에 배열로 저장.
  console.log(key, person[key]);
}