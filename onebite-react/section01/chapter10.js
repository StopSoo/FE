// for문
// for (초기식; 조건식; 증감식)
for (let idx=0; idx < 5; idx++) {
  if (idx >= 5) break;  // 반복문 중단하기
  if (idx % 2 == 0) continue; // 건너뛰기
  console.log(idx);
}