/* async */
// 한 함수를 비동기 함수로 만들어주는 keyword.
// 함수가 Promise를 반환하도록 변환해주는 keyword.

// 이 객체를 결과값으로 갖는 새로운 Promise를 반환하는 함수로 변환됨.
async function getData() {
  return {
    name: "정지수",
    id: "stopsoo"
  };
} 
// 애초에 Promise를 반환하는 함수라면 async가 별다른 일을 하지 않음.
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "정지수",
        id: "stopsoo",
      });
    }, 1500);
  });
}

/* await */
// async 함수 내부에서만 사용이 가능한 keyword.
// 비동기 함수가 다 처리되기를 기다리는 역할.
// Promise에서 사용했던 then method를 사용하지 않아도 됨(!)
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();