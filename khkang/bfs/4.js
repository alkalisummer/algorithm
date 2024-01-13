/* 

단지번호붙이기 

백준 링크 : https://www.acmicpc.net/problem/2667

문제
<그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.

입력
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

출력
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `5
10101
01010
10101
01010
10101`
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const n = Number(input[0]);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let graph = [];
for (let i = 0; i < n; i++) {
  graph[i] = [];
  for (let j = 0; j < n; j++) {
    graph[i].push(Number(input[i + 1][j]));
  }
}

let visited = [];
for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(0);
let cnt_ans = [];

const bfs = (param) => {
  let cnt = 1;
  let queue = new Queue();
  queue.enqueue(param);
  visited[param[0]][param[1]] = 1;

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    let x = cur[0];
    let y = cur[1];
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (visited[nx][ny] == 0 && graph[nx][ny] == 1) {
        cnt++;
        visited[nx][ny] = 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  if (cnt) {
    cnt_ans.push(cnt);
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] == 0 && graph[i][j] == 1) {
      bfs([i, j]);
    }
  }
}
cnt_ans.sort((a, b) => a - b);
console.log(cnt_ans.length);
cnt_ans.forEach((v, i, o) => {
  console.log(v);
});
