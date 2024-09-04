// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three); // 1 2 3

let [one1, two1] = arr; // 배열에 저장된 원수 개수보다 적게도 할당 가능: 앞에서부터 할당
console.log(one1, two1);  // 1 2

let [one2, two2, three2, four2] = arr;  // 배열에 저장된 원소 개수보다 많게도 할당 가능
console.log(one2, two2, three2, four2); // 1 2 3 undefined

let [one3, two3, three3, four3=4] = arr;  // 기본값 설정도 가능
console.log(one3, two3, three3, four3); // 1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "정지수",
  age : 26,
  hobby: "독서",
};

let { name, age, hobby } = person;  // 객체는 {}를 사용할 것(!)
console.log(name, age, hobby);  // 정지수 26 독서

// 3. 객체의 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
}

func(person); // 객체를 넘겼을 때만 객체 구조 분해 할당이 가능 