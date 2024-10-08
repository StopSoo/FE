/**
 * 인터페이스의 확장
 * - extends 키워드를 사용해서 인터페이스끼리 상속 관계를 만드는 것이 가능하다.
 * - 상속 인터페이스로부터 상속받은 프로퍼티의 타입을 하위 인터페이스에서 변경하는 것은 불가능하다. 
 * - 타입 별칭을 상속하는 것도 가능(type - interface) => 객체 타입이면 상속이 가능.
 */
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name과 age property는 자동으로 갖게 됨.
  isBark: boolean;
}

const dog: Dog = {  // 이런 식으로 사용 가능.
  name: "",
  age: 3,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  // Dog와 Cat이 갖고 있는 모든 프로퍼티들을 가짐.
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
