/**
 * 함수 오버로딩
 * - JS에서는 불가능하고, TS에서는 가능.
 * - 하나의 함수를 매개변수의 개수나 타입에 따라 여러 가지 버전으로 만드는 문법.
 */
// 하나의 함수 func, 모든 매개변수의 타입은 number.
// - Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값을 출력.
// - Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력.

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 = 구현 시그니처
// 오버로딩하는 함수들에 따라 선택적 매개변수를 적용할 것.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number")
    console.log(a + b + c);
  else
    console.log(a * 20);
}

func(1);
func(1, 2, 3);