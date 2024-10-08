/**
 * 클래스
 * - 첫 글자를 대문자로 하는 파스칼 표기법을 사용.
 * - extends 키워드를 사용해 클래스 상속 가능.
 */
// 원래 객체를 만드는 방식.
// 모두 property로 취급하기 때문에 콤마를 사용함.
let studentA = {
  name: "정지수",
  grade: "A+",
  age: 26,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  }
};
// 클래스 선언
// 필드는 세미콜론으로, 생성자나 메서드는 끝에 붙이는 거 없이 선언.
class Student { 
  // 필드
  name;
  grade;
  age;
  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드 => 원래 객체 생성 시 선언하던 방식과 같은 방식으로 하면 됨.
  study() {
    console.log("열심히 공부함!");
  }
  introduce() {
    // 이 클래스를 통해 생성한 객체의 프로퍼티를 불러옴.
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}
// 클래스를 통한 객체 생성 => 인스턴스
let studentB = new Student("정지수", "A+", 26);

console.log(studentB);
studentB.study();
studentB.introduce();

// 상속을 활용한 클래스 확장 
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;
  // 생성자
  // 매개변수는 지우면 안됨(!)
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);  // 부모 클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }
  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함.`);
  }
}

let studentDeveloper = new StudentDeveloper("정지수", "A+", 26, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();