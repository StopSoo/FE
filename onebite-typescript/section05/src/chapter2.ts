/**
 * 선언 합치기(Declaration Merging)
 * - 인터페이스는 동일한 이름으로 선언해도 에러가 나지 않는다.
 * - 그 이유는 중복으로 선언한 인터페이스는 결국 다 '합쳐지기' 때문!
 * - 만약 같은 프로퍼티를 각각 다른 타입으로 선언하게 된다면 '충돌'이 발생한다.
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  // 결국 합쳐진 인터페이스
  name: "정지수",
  age: 26
};

/**
 * 모듈 보강
 * - 이미 인터페이스를 선언한 후에 추가로 프로퍼티를 사용해야 할 경우
 * - 다음과 같이 모듈 보강을 이용한다. 
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib { // 추가
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};