/* 콜백함수 */
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수
function main(value) {
  value();  // 매개변수로 들어온 함수를 실행시킴.
}

function sub() {
  console.log("sub");
}

main(sub);  // 기본 호출법
main(() => {  // 함수 표현식을 이용한 호출법 -> 익명 함수
  console.log("sub");
});

/* 콜백함수의 활용 */
// 매개변수로 callback을 추가한 후, 함수 호출 시 콜백함수를 대입
// 중복코드를 제거하면서, 간단하게 코드 작성 가능
function repeat(count, callback) {
  for (let idx=1; idx <= count; idx++) 
    callback(idx);
}

repeat(5, function(idx) {  // 원하는 일을 하는 함수를 전달
  console.log(idx * 2);
});