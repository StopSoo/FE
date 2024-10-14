/**
 * 제네릭 클래스
 * - 제네릭 Interface나 제네릭 타입 변수와는 다르게, 생성자의 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론한다.
 * - 따라서 객체 생성 시 생성자 옆에 제네릭 타입 명시가 필수는 아니다(!)
 */

class List<T> {
  // 접근제어자를 이용해 매개변수를 선언하면 선언과 초기화 생략 가능(!)
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1, 2, 4]

const stringList = new List(["1", "2", "3"]);
stringList.pop();
stringList.push("4");
stringList.print(); // ['1', '2', '4'];