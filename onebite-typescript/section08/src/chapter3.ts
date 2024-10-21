/**
 * Mapped Type
 * - interface에서는 사용 불가. type에서만 사용 가능.
 * - 기존의 객체 타입을 다양한 방식으로 바꿔서 사용 가능.
 * - 실무에서 굉장히 많이 쓰임(중요!)
 */
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // optional variable로 선언하면서 필요한 프로퍼티만 사용할 수 있게 됨. 
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  // 모든 프로퍼티의 타입을 boolean으로 선언.
  [key in "id" | "name" | "age"]: boolean;
};

type StringUser = {
  // keyof 연산자를 사용해서 프로퍼티를 불러올 수 있음.
  [key in keyof User]: String;
};

type ReadonlyUser = {
  // 모든 프로퍼티들을 readonly로 선언.
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "정지수",
    age: 26
  };
}
// 한 명의 유저 정보를 수정하는 기능
// 보통 객체의 정보를 수정할 때는 수정하려고 하는 정보만 작성하는 경우가 많음.
// => mapped type이 유용하게 쓰이는 경우.
function updateUser(user: User): PartialUser {
  // 객체를 받아서 수정할 부분만 반환
  return {
    name: "정수영"
  };
}
