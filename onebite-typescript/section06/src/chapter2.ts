/**
 * 접근 제어자(Access Modifier)
 * - 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정.
 * - public / private / protected
 * - 기본값은 public. 어디서든 접근이 가능.
 * - private 키워드를 사용하면 클래스 내에서만 접근이 가능. 밖에서는 접근이 불가능.
 * - protected 키워드를 사용하면 해당 클래스와 그 클래스를 상속한 클래스 내에서만 접근이 가능. 밖에서는 접근이 불가능.
 * - 생성자의 매개변수에서 접근 제어자를 사용하면 필드 선언과 생성자를 통한 기본값 초기화는 필요 없어진다(!)
 */

class Employee {
  // 필드
  public name: string;
  private age: number;
  protected position: string;
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

const employee = new Employee("정지수", 26, "developer");
// 이와 같이 프로퍼티 값 수정이 가능하나, private 키워드를 사용헸기 때문에 접근이 불가능.
// employee.age = 30;  
