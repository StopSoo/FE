// 함수
function greeting () {  // 함수 선언
  console.log("안녕하세요!");
}

greeting(); // 함수 호출

function getArea (width, height) {  // 매개변수 사용
  let area = width * height;

  console.log(area);
}

getArea(10, 20);

function getArea2 (width, height) {
  let area = width * height;

  function another() {  // 중첩 함수
    console.log("another");
  }

  another();
  return area;  // 반환값
}

let area1 = getArea2(10, 20);
console.log(area1);

// hoisting : 끌어올리다 !
// 함수 선언 전에 함수가 호출되더라도, 그 함수의 선언이 호출 전에 있는 것처럼 동작.