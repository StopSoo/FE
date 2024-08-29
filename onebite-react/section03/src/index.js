// math.js 파일이 가지고 있는 함수들을 사용 가능.
// CJS 사용 방법 1
const moduleData = require("./math"); 
console.log(moduleData);
console.log(moduleData.add(2, 1));
console.log(moduleData.sub(2, 1));

// CJS 사용 방법 2: 구조 분해식을 이용.
const { add, sub } = require("./math");
console.log(add(2, 1));
console.log(sub(2, 1));

// ESM (ES Module)
// 불러오는 파일의 확장자명까지 필히 작성해야 함.
// multiply는 default module이라 {} 없이 호출.
import multiply, { add, sub } from "./math.js";
console.log(add(1, 2));
console.log(sub(5, 3));

// npm i randomcolor
// package-lock.json : package.json 파일보다 더 구체적으로 작성됨.
// node_modules 파일 안에 다운 받은 라이브러리 파일이 생성됨
// npm에서 다운로드 받은 라이브러리 사용 예시
import randomColor from "randomcolor";  // 라이브러리 import - 라이브러리의 이름만 명시.
const color = randomColor();
console.log(color); // 랜덤으로 색깔 코드가 출력됨