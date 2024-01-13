/* 

A -> B

백준 링크 : https://www.acmicpc.net/problem/16953

문제
정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

2를 곱한다.
1을 수의 가장 오른쪽에 추가한다. 
A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

입력
첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

출력
A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.

*/

//1. 역으로 시작 -> 목표값이 짝수일 경우 2로 나누고 맨끝자리가 1이면 1을 빼가며 반복문 진행
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//let input = ['2 162'];
//let input = ['4 42'];
//let input = ['1 3'];
const data = input[0].split(' ').map(Number);
let a = data[0];
let b = data[1];

let cnt = 1;
while (true) {
  if (b === a) {
    break;
  } else if (b < a) {
    cnt = -1;
    break;
  }
  if (b % 2 === 0) {
    b = b / 2;
    cnt++;
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
    cnt++;
  } else {
    cnt = -1;
    break;
  }
}

console.log(cnt);
