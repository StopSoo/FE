// for문
// 초기식; 조건식; 증감식
for (let idx=0; idx < 5; idx++) {
  if (idx >= 5) break;
  if (idx % 2 == 0) continue;
  console.log(idx);
}