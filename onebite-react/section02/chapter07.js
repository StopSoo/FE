/* 6가지의 배열 요소 조작 메서드 */
// * shift/unshift는 push/pop보다는 느리게 동작(!)

// 1. push
// 배열의 "맨 뒤"에 새로운 요소를 추가하는 메서드.
// 그 후 변환된 배열의 길이를 반환(!)
let arr1 = [1, 2, 3];
arr1.push(4); // 1개의 원소 추가
const newLength = arr1.push(5, 6, 7); // 여러 개의 원소 추가 후 배열의 길이를 반환.

console.log(arr1);  // [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 7

// 2. pop
// 배열의 "맨 마지막 요소"를 제거하고, 해당 요소를 반환.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);  // 3
console.log(arr2);  // [1, 2]

// 3. shift
// 배열의 "맨 앞"에 있는 요소를 제거, 해당 요소를 반환.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1
console.log(arr3);  // [2, 3]

// 4. unshift
// 배열의 "맨 앞"에 새로운 요소를 추가하고, 변환된 배열의 길이를 반환(!)
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(newLength2, arr4);  // 4 [0, 1, 2, 3]

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환.
// slice를 사용하더라도 원본 배열은 변경되지 않음.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 시작 인덱스, 끝 인덱스+1
let sliced2 = arr5.slice(2);  // 시작 인덱스부터 마지막 원소까지를 잘라서 저장.
let sliced3 = arr5.slice(-3); // "뒤에서부터" 원소 "3개"를 잘라서 저장.

console.log(arr5);  // [1, 2, 3, 4, 5]
console.log(sliced, sliced2, sliced3);  // 모두 다 [3, 4, 5]

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환.
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]