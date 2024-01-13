/* 

수들의 합

백준링크 : https://www.acmicpc.net/problem/1789

문제
서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

입력
첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.

출력
첫째 줄에 자연수 N의 최댓값을 출력한다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let s = Number(input[0]);

let num = 0;
let addNum = 1;

let numArr = [];

const popArr = (arr) => {
  arr.pop();
  let sum = s - arr.reduce((a, b) => a + b, 0);
  if (arr.indexOf(sum) !== -1) {
    popArr(arr);
  } else {
    arr.push(sum);
  }
};

while (true) {
  if (num === s) {
    break;
  } else if (num > s) {
    popArr(numArr);
    break;
  }

  num += addNum;
  numArr.push(addNum);
  addNum++;
}
console.log(numArr.length);
