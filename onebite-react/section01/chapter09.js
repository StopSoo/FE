// 1. if 조건문 (if문)
// if - else if - else
// 조건을 괄호 안에 넣기 !

let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else {
  console.log("num은 10 이상이 아닙니다.");
}

// 2. switch문
// if문과 기능 자체는 동일하나, 다수의 조건을 처리할 때 if보다 더 직관적.
// 포인트 1) 괄호 사용 2) 콜론과 중괄호 3) break문 4) default문

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("케이스에 해당하지 않습니다.");
  }
}