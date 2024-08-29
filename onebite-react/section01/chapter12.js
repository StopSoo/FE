function funcA () {
  console.log("funcA");
}

let varA = funcA; // 함수의 반환값을 변수에 담는 게 아닌, 함수 자체를 담음.
console.log(varA);  // 함수 자체가 출력됨.
varA(); // 변수 varA에 담긴 함수 funcA가 호출됨.

/* 함수 표현식 */
// 1. 함수 선언과 동시에 변수에 담는 것이 가능.
// 2. 변수에 바로 담길 때 선언한 함수의 이름으로는 함수 호출이 불가능.
// 3. 따라서 함수 이름을 설정하지 않고 선언 가능 => "익명 함수"
// 4. 이렇게 선언된 변수는 hoisting의 대상이 아님 (!)
let varB = function () {  
  console.log("funcB");
}

varB();

/* 화살표 함수 */
// varC를 화살표 함수로 표현하면 varD, varE와 같음.
let varC = function() {
  return 1;
}

let varD = () => { return 1; }
let varE = () => 1; // 단순히 값을 반환하기만 하는 함수라면 이와 같이도 표현 가능.