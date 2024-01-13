/*
좌표 압축

백준링크: https://www.acmicpc.net/problem/18870

문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

입력
첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//const input = ['5', '2 4 -10 4 -9'];

const cnt = Number(input[0]);
const data = input[1].split(' ').map(Number);

// Set 으로 중복제거
let numSet = new Set();

for (let i = 0; i < data.length; i++) {
  numSet.add(data[i]);
}
let numArr = [...numSet];

// 정렬
const temp = numArr.sort((a, b) => a - b);

//map을 사용하여 정렬된 배열 값과 인덱스를 매핑(인덱스가 곧 자기자신보다 작은 요소의 개수이기 때문)
let myMap = new Map();

for (let i = 0; i < temp.length; i++) {
  let key = temp[i];
  let value = i;
  myMap.set(key, value);
}

let result = '';

for (let i = 0; i < data.length; i++) {
  result += myMap.get(data[i]) + ' ';
}

console.log(result);
