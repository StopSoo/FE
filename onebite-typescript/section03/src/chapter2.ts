/**
 * Unknown 타입
 * - 전체 집합.
 * - 모든 타입의 슈퍼 타입.
 */
function unknownExam() {
  // 모든 타입의 값들을 할당 가능.
  let a: unknown = 1; 
  let b: unknown = "hello";

  let unknownVar: unknown;
  // 다음과 같이 다운캐스팅이 불가능.
  // let num: number = unknownVar;
  // let str: string = unknownVar;
}

/**
 * Never 타입
 * - 모순을 설명하는 타입.
 * - 모든 타입의 서브 타입.
 * - 공집합.
 * - 어떤 값도 저장되면 안되는 변수에 never 타입을 사용할 것.
 */
function neverExam() {
  // 반환할 수 있는 값이 없다.
  function neverFunc(): never {
    while (true) {}
  }
  // 다음과 같이 할당이 가능. (업캐스팅)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // 다운 캐스팅은 불가능.
  // let never1: never = 10;
  // let never2: never = "string";
}

/**
 * Void 타입
 * - undefined의 슈퍼 타입.
 */
function voidExam() {
  function voidFunc(): void {
    // return 값이 없음.
    console.log("hi");
  }
  // 다음과 같이 업캐스팅이 가능.
  let voidVar: void = undefined;
}

/**
 * Any 타입
 * - 모든 타입의 슈퍼 타입이면서도, 모든 타입(never 제외)의 서브 타입이 되기도 한다. 
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  // 다음과 같이 다운캐스팅이 가능(!) => any 타입이라 가능.
  anyVar = unknownVar;  // 자신한테 오는 다운 캐스팅.
  undefinedVar = anyVar;  // 자신이 가는 다운 캐스팅.
  // 예외적으로 never 타입으로의 다운캐스팅은 불가능.
  // neverVar = anyVar;
}

