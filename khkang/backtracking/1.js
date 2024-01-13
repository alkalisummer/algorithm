/*

N과 M (1)

백준 링크 : https://www.acmicpc.net/problem/15649

문제
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.

*/

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = '4 4'.toString().split('\n');
let [n, m] = input[0].split(' ').map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let arr = []; // 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스
let answer = '';
function dfs(arr, depth) {
  if (depth == m) {
    // 모든 순열을 확인하는 부분
    let result = []; // 순열(permutation) 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' '; // 계산된 순열을 실질적으로 처리하는 부분
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // 하나씩 원소 인덱스(index)를 확인하며
    if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}
dfs(arr, 0);
console.log(answer);
