// 타입 별칭
// type 키워드를 사용해 정의한다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "정지수",
  nickname: "stopsoo",
  birth: "1999.11.25",
  bio: "Hi",
  location: "대한민국",
};

// 인덱스 시그니처
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법.
// 정해놓은 규칙을 위반하지만 않으면 모든 객체를 허용. => 빈 객체도 가능하다는 뜻.
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};
// 인덱스 시그니처 외에 필수 프로퍼티를 적용하고 싶다면 다음과 같이 추가.
// 이 때 주의할 점은 인덱스 시그니처의 value와 일치해야 한다. 
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; 
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 840,
};