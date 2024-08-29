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