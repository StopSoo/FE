/**
 * 함수 타입의 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단.
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
// 기준1. 반환값이 호환되는가
type A = () => number;  // number
type B = () => 10;  // number literal

let a: A = () => 10;
let b: B = () => 10;

a = b;  // 업캐스팅 (O)
// b = a; // 다운캐스팅 (X)

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅 (X)
d = c;  // 다운캐스팅 (O)

// 객체로 쉽게 이해하기!
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
// Ex1
// animalFunc = dogFunc;
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color);
};
// Ex2
dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// - 매개변수가 더 많은 쪽으로는 할당 가능.
// - 하지만 매개변수의 타입 자체가 다르다면 아예 할당 불가능.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 