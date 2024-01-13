/* 

미로 탐색

백준 링크 : https://www.acmicpc.net/problem/2178

문제
N×M크기의 배열로 표현되는 미로가 있다.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

입력
첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.

출력
첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `4 6
110110
110110
111111
111101`
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.tailIndex = 0;
    this.headIndex = 0;
    this.items = {};
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

const [n, m] = input[0].split(' ').map(Number);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const graph = [];
for (let i = 0; i < n; i++) {
  graph[i] = [];
  for (let j = 0; j < m; j++) {
    graph[i].push(Number(input[i + 1][j]));
  }
}
let visited = [];
for (let i = 0; i < n; i++) visited[i] = new Array(m).fill(0);

function bfs(xy) {
  let queue = new Queue();
  queue.enqueue(xy);
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    let x = cur[0];
    let y = cur[1];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] == 0 && graph[nx][ny] == 1) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
}
bfs([0, 0]);
console.log(visited[n - 1][m - 1] + 1);
