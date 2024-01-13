/*

소트 인사이드 

백준 링크 : https://www.acmicpc.net/problem/1427

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	87140	56748	47048	65.469%
문제
배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

입력
첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//const input = ['500613009'];

const numArr = input[0].split('');

numArr.sort((a, b) => b - a);

let result = '';

for (let i = 0; i < numArr.length; i++) {
  result += numArr[i];
}

console.log(result);
