/**
 * 인터페이스와 클래스
 * - 인터페이스는 클래스의 설계도 느낌.
 * - implements 키워드를 사용해서 인터페이스를 구현하는 클래스를 선언.
 * - interface로 구현한 필드들은 무조건 public!
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
// Character 클래스는 CharacterInterface를 구현한다. 
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동.`);
  }
}