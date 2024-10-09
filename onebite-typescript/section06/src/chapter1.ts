/**
 * 타입스크립트의 클래스
 * - 클래스는 하나의 타입으로도 추론됨.
 */
// 객체 먼저 만들어보기
const employee = {
  name: "정지수",
  age: 26,
  position: "developer",
  work() {
    console.log("일하기");
  }
};

class Employee {
  // 필드
  // 타입을 할당해주지 않으면 any 타입이 할당됨.
  // 따라서 기본값을 할당해주거나, 생성자를 통해 초기화해주거나!
  name: string;
  age: number;
  position: string;
  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일하기");
  }
}
// 클래스를 통한 객체 생성
const employeeB = new Employee("정지수", 26, "개발자");
console.log(employeeB);

// 클래스의 확장
// TS에서는 super()를 사용하지 않으면 에러가 발생! (JS에서는 큰 문제가 아니었음.)
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}