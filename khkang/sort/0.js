/*
좌표 정렬하기

백준링크: https://www.acmicpc.net/problem/11650

문제
수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.

둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109)

출력
A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//let input = ['5', '3 4', '1 1', '1 -1', '2 2', '3 3'];

const coordinate = [];

for (let i = 1; i < input.length; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  coordinate.push([x, y]);
}

coordinate.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

let result = '';

for (let i = 0; i < coordinate.length; i++) {
  result += `${coordinate[i][0]} ${coordinate[i][1]}\n`;
}

console.log(result);
