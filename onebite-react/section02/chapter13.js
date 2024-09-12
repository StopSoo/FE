/* Promise: 비동기 작업을 감싸는 객체 */
// Promise의 효능
// 1. 비동기 작업 실행(!)
// 2. 비동기 작업 상태 관리(!)
// 3. 비동기 작업 결과 저장(!)
// 4. 비동기 작업 병렬 실행
// 5. 비동기 작업 다시 실행
// ...

// Promise의 3가지 상태
// 1) 대기(Pending): 비동기 작업이 진행중이라 완료되지 않은 상태.
// 2) 성공(Fulfilled): 비동기 작업이 성공적으로 마무리된 상태.
// 3) 실패(Rejected): 비동기 작업이 모종의 이유로 실패된 상태.

// executor 함수에는 resolve, reject라는 두 가지 매개변수가 전달됨.
// 해결(resolve) = 대기 -> 성공
// 거부(reject) = 대기 -> 실패

const promise = new Promise((resolve, reject) => {
  // executor: 비동기 작업을 실행할 콜백 함수
  setTimeout(() => {
    console.log("안녕!");
    resolve("성공");  // fulfilled
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then/catch method
// Promise가 성공하게 되면(=resolve를 호출하게 되면), 그 후에 then method에 전달한 콜백 함수를 실행시킴.
// 동시에, resolve 함수에 인수로 전달된 값을 콜백함수에 전달함.
promise2.then((value) => {
  console.log(value); // 20
});
// 만약 reject 함수가 실행된다면 then method는 실행되지 않음.
promise2.catch((error) => {
  console.log(error);
});
// then method는 Promise 객체를 그대로 반환함.
// 따라서 아래와 같이 연결도 가능. => Promise Chaining
promise2
  .then((value) => {
    console.log(value); // 20
  }).catch((error) => {
    console.log(error);
  });
  
// Promise의 추가적인 활용 부분은 너무 어려움 ... 추가적인 공부가 필요!