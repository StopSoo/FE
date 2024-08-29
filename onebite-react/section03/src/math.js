// math module
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CJS(Common JS)
// property: value
module.exports = {
  add: add,
  sub: sub,
}
// 객체 형태로 파일 밖으로 내보내진 add, sub를 다른 파일에서 사용 가능.

// ESM (ES Module)
// package.json 파일에 "type": "module" 추가하기 (!)
// CJS와는 함께 사용 불가.
// export라는 예약어 뒤에 객체를 literal로 생성해서 내보내고 싶은 값들을 담아주기.
// 모듈을 내보내는 방법 1
export { add, sub };

// 모듈을 내보내는 방법 2
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 모듈을 내보내는 방법 3
// default 키워드를 사용할 경우, 이 파일의 대표 모듈이 됨.
// 따라서 외부 모듈에서 호출 시, {}를 사용하지 않고 import해야 함.
export default function multiply(a, b) {
  return a * b;
}