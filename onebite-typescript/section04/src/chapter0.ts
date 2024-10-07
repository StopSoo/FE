/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// JS = 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하기.
// TS = 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기하기.
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
// [1] 매개변수에 기본값을 설정할 경우, 타입을 지정해주지 않아도 기본적으로 타입이 잘 추론된다. 
// - 주의점1) 매개변수의 기본값의 타입과 선언한 매개변수의 타입이 다를 경우 오류 발생.
// - 주의점2) 함수 사용 시 매개변수의 기본값의 타입과 다른 타입의 값을 넣을 경우 오류 발생.
// [2] optional로 설정한 매개변수의 타입은 선언한 타입과 undefined의 union 타입이 된다. 
// - 따라서 이 경우에는 타입 가드를 사용해야 한다.
// [3] 필수 매개변수는 선택적 매개변수보다 앞에 있어야 한다.
function introduce(name = "정지수", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall}`);
  }
}

introduce("정지수", 167);
introduce("정지수");

// 만약 rest의 길이를 정하고 싶다면, [number, number]의 식으로 타입을 지정해주면 됨.
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);  // 6
getSum(1, 2, 3, 4, 5); // 15