/**
 * 템플릿 리터럴 타입
 * - 문자열로 여러 가지 상황들을 표현해야 하는 경우 유용하게 사용 가능.
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;