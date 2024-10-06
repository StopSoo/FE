/**
 * 타입 단언(Type Assertion)
 * - as 키워드를 사용.
 * - 꽤 위험한 문법이므로 조심해서 사용할 것!
 */
// Ex1
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;  // 타입 단언
person.name = "정지수";
person.age = 26;

// Ex2
type Dog = {
  name: string;
  color: string;
};

let dog = { // 타입 단언을 통해서 초과 프로퍼티 검사를 통과.
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * - 값 as 단언
 * - A as B
 * - A가 B의 슈퍼 타입 or A가 B의 서브 타입
 */
let num1 = 10 as never; // never는 모든 타입의 서브 타입.
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼 타입.

// let num3 = 10 as string; // 서로소 집합은 타입 단언이 불가능.

/**
 * const 단언
 * - const로 선언한 것과 동일한 효과를 줌.
 */
// number -> number literal
let num4 = 10 as const; 
// 객체에 사용하게 되면, 객체의 모든 property들이 readonly 형태가 됨.
let cat = {
  name: "야옹이",
  color: "yello",
} as const; 
// cat.name = ''; // 따라서 value 수정이 불가능.

/**
 * Non Null 단언
 * - 어떤 값이 null이거나 undefined가 아니라고 알려줌.
 * - !를 사용.
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "정지수",
};
// number | undefined 타입의 값은 number 타입 변수에 할당할 수 없다. 
const len: number = post.author!.length;