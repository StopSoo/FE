// void
// 아무 것도 없음을 의미하는 타입.
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// never
// 존재하지 않는, 불가능한 타입.
// func3()는 무언가를 반환한다는 것 자체가 불가능하기 때문에 never 타입.
function func3(): never {
  while (true) {}
}