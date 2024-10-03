// 객체
// 객체 리터럴 타입을 사용해 타입을 정의. => 점 표기법 사용 가능.
// 구조적 타입 시스템 = 프로퍼티 기반 타입 시스템 = 프로퍼티를 기준으로 타입을 결정.
let user: {
  id?: number;  // optional variable
  name: string;
} = {
  id: 1,
  name: "정지수",
};
// 객체 프로퍼티 값 변경이 금지될 때는 'readonly' 키워드를 붙인다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};