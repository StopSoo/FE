console.log(1);
// JS는 싱글 스레드로 작동.
// JS 엔진이 실행하지 않고, Web APIs가 실행하게 됨.
setTimeout(() => {  // 3초가 지난 후 콜백함수가 실행됨.
  console.log(2);
}, 3000);

console.log(3);