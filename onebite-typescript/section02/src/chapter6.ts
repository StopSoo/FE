// any
// 특정 변수의 타입을 확실히 모를 때 사용.
// 어떤 값이든 할당 가능. 메서드도 제약 없이 사용 가능.
// 타입 검사를 런타임에 실행하기 때문에, 오류 또한 런타임에 확인 가능. => 문제점
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
// 어떤 타입의 변수에든 any 타입의 변수의 값을 할당 가능.
let num: number = 10;
num = anyVar;

// unknown
// 어떤 타입의 값이든 할당 가능. => any 타입과 같은 특징.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
// 어떤 타입의 변수에든 할당 불가능. 메서드 사용도 불가능. 연산도 불가능.
// num = unknownVar;
// unknownVar.toUpperCase();

// 활용 방법(타입 정제)
if (typeof unknownVar === "number") {
  num == unknownVar;
}

// 결론: 타입을 결정하기 어려운 변수에 대해서 any 타입보다는 unknown 타입을 사용하자.