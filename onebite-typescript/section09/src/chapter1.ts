/**
 * 분산적 조건부 타입
 * - 타입 변수에 유니온 타입을 할당하게 되면 일반적인 조건부 타입과 다른 방식으로 동작.
 * - 분산 조건부 타입을 사용하고 싶지 않다면 []를 사용할 것.
 */
type StringNumberSwitch<T> = T extends number ? string : number;
type StringNumberSwitch2<T> = [T] extends [number] ? string : number; // 분산 방지

let a: StringNumberSwitch<number | string>;
// = StringNumberSwitch<number> | StringNumberSwitch<string>
// = string | number

/**
 * 실용적 예제
 */
// Ex> T 타입에서 U 타입만 제거한 타입을 추출.
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Step 1)
// Exclude<number | string> |
// Exclude<string | string> |   => 타입이 같으므로 never 타입이 되고 결국은 없어짐.
// Exclude<boolean, string> 
// Step 2)
// number | never | boolean
// Step 3) 유니온 타입에 never(공집합)가 포함되어 있으면 never는 사라짐(!)
// number | boolean