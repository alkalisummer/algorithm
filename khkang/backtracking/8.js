/*

0 만들기 

백준 링크 : https://www.acmicpc.net/problem/7490

문제
1부터 N까지의 수를 오름차순으로 쓴 수열 1 2 3 ... N을 생각하자.

그리고 '+'나 '-', 또는 ' '(공백)을 숫자 사이에 삽입하자(+는 더하기, -는 빼기, 공백은 숫자를 이어 붙이는 것을 뜻한다). 이렇게 만든 수식의 값을 계산하고 그 결과가 0이 될 수 있는지를 살피자.

N이 주어졌을 때 수식의 결과가 0이 되는 모든 수식을 찾는 프로그램을 작성하라.

입력
첫 번째 줄에 테스트 케이스의 개수가 주어진다(<10).

각 테스트 케이스엔 자연수 N이 주어진다(3 <= N <= 9).

출력
각 테스트 케이스에 대해 ASCII 순서에 따라 결과가 0이 되는 모든 수식을 출력한다. 각 테스트 케이스의 결과는 한 줄을 띄워 구분한다.


*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//ㅇㅇ

const input = `2
3
7`
  .trim()
  .split('\n');

const [n, ...arr] = input.map(Number);
const operator = [];
const numArr = [];
for (let i = 0; i < arr.length; i++) {
  let nArr = [];
  for (let j = 1; j <= arr[i]; j++) {
    nArr.push(j);
  }
  numArr[i] = nArr;
}

const calc = [' ', '+', '-'];
function dfs(arr, depth) {
  if (depth === arr.length) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
      res += arr[i];
      if (i < arr.length - 1) {
        res += calc[operator[i]];
      }
    }
    let result = res.replaceAll(' ', '');
    if (eval(result) == 0) {
      console.log(res);
    }
    return;
  }
  for (let i = 0; i < 3; i++) {
    operator.push(i);
    dfs(arr, depth + 1);
    operator.pop();
  }
}

for (let n of numArr) {
  dfs(n, 1);
  console.log('');
}
