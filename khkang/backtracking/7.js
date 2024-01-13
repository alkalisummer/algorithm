/* 

모든 순열

백준 링크 : https://www.acmicpc.net/problem/10974

문제
N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 8)이 주어진다. 

출력
첫째 줄부터 N!개의 줄에 걸쳐서 모든 순열을 사전순으로 출력한다.

*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = '4'.toString().trim().split('\n');

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
const visited = new Array(n).fill(false);
const selected = [];

let result = '';
const dfs = (depth) => {
  if (depth === n) {
    let resArr = [];
    for (let s of selected) resArr.push(arr[s]);
    for (let r of resArr) result += r + ' ';
    result += '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(result);
