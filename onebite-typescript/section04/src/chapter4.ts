/**
 * 사용자 정의 타입가드
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;  // union type
// 1. animal 객체를 Dog 객체로 단언 (as 사용)
// 2. isDog 함수의 반환값 타입이 Dog라는 것을 명시. (animal is Dog)
// - 함수의 값이 참이면 인수로 전달한 animal이라는 값이 Dog임을 명시.
function isDog(animal: Animal): animal is Dog {  // animal이 Dog 객체인지 확인.
  // return animal.isBark !== undefined;
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// property를 기준으로 사용자 정의 타입을 구별하고자 하면 뭔가 애매함.
function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if (isCat(animal)) {
    animal;
  }
}