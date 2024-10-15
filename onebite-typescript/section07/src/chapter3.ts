/**
 * 제네릭 인터페이스
 * - 제네릭 함수와 달리, 변수의 타입을 정의할 때 반드시 제네릭으로 타입을 작성해줘야 한다. 
 * - 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 */
// 제네릭 인터페이스 선언
interface KeyPair<K, V> {
  key: K;
  value: V;
}
// 사용법
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2", "3"]
};

/**
 * 인덱스 시그니처
 * - 제네릭 인터페이스와 인덱스 시그니처를 함께 사용하면 유연하게 타입을 정의할 수 있다.
 */
// 기본적인 사용법
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};
// 인덱스 시그니처 적용
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
}

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * - Ex> 유저 관리 프로그램 (학생 유저 / 개발자 유저)
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}
// 제네릭 인터페이스로 선언
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // User 인터페이스를 제네릭 인터페이스로 선언함으로써 타입 가드가 필요 없어짐. 
  // if (user.profile.type !== 'student') {  
  //   console.log('잘못 오셨습니다.');
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "정지수",
  profile: {
    type: "developer",
    skill: "TypeScript"
  }
};

const studentUser: User<Student> = {
  name: "정수영",
  profile: {
    type: "student",
    school: "대진대학교"
  }
};

goToSchool(studentUser);  // O
// goToSchool(developerUser);  // X