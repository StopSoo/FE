/* 기본적인 활용 */
function add1(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);  // sum의 값을 함수 밖에서도 사용하기 위함.
  }, 3000);
}

add2(1, 2, (value) => {
  console.log(value);
});

/* 심화 활용: 음식을 주문하는 상황 */
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}
// 콜백 지옥에 휩싸일 수 있음(!)
orderFood((food) => {
  console.log(food);
  // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달하는 것이 가능.
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  }); 
});