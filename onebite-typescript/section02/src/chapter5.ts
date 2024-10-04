// enum
// 여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입.
// JS에는 없고 TS에만 존재!
// 기본 값은 0부터 시작. 원하는 값 할당도 가능.
// enum은 컴파일 결과 JS파일에서 사라지지 않음(!)
// 일련의 규칙을 만드는 등에 활용하기 좋음.

// 1. 숫자형 enum
enum Role { 
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 2. 문자형 enum
enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: "정지수",
  role: Role.ADMIN, // 0 = 관리자
  language: Language.korean,
};

const user2 = {
  name: "정수영",
  role: Role.USER,  // 1 = 일반 유저
};

const user3 = {
  name: "이시은",
  role: Role.GUEST, // 2 = 게스트
};

