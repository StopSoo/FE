// 1. Date 객체를 생성하는 방법
// Date() 생성자를 사용해 객체를 생성.
// 슬래시(/), 콤마(,), 대시(-) 등으로 구분 가능.
let date1 = new Date(); 
console.log(date1); // 현재 시간을 출력.

let date2 = new Date("2024/11/25"); // 내가 원하는 날짜로 Date 객체를 생성.
let date3 = new Date("2024/11/25/10:10:10");  // 날짜/시간

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(협정 세계시; UTC)"로부터 몇 ms가 지났는지를 의미하는 숫자값.
// getTime() 함수: date1에 저장되어 있는 시간에 해당하는 타임 스탬프 값을 반환.
let ts1 = date1.getTime();  
let date4 = new Date(ts1);

console.log(date1, date4);  // 같은 시간이 출력됨.

// 3. 시간 요소들을 추출하는 방법
// JS에서 월은 0부터 시작. => 배열 인덱스와 같음.
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(3);  // 4월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(30);
date1.setSeconds(30);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());  // Sun Apr 30 2023 => 시간을 제외한 날짜만 출력
console.log(date1.toLocaleString());  // 우리 나라 시간 형태에 맞게 출력
