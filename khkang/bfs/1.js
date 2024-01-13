/*

나이트의 이동

백준 링크 : https://www.acmicpc.net/problem/7562

문제
체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다. 나이트가 이동하려고 하는 칸이 주어진다. 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?

입력
입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.

각 테스트 케이스는 세 줄로 이루어져 있다. 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다. 체스판의 크기는 l × l이다. 체스판의 각 칸은 두 수의 쌍 {0, ..., l-1} × {0, ..., l-1}로 나타낼 수 있다. 둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.

출력
각 테스트 케이스마다 나이트가 최소 몇 번만에 이동할 수 있는지 출력한다.

*/
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1
`
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.items = {};
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

dx = [-2, -2, -1, -1, 1, 1, 2, 2]; // 이동할여덟가지방향정의
dy = [-1, 1, -2, 2, -2, 2, -1, 1];
let testCases = Number(input[0]); // 테스트케이스의수
let line = 1;
while (testCases--) {
  let l = Number(input[line]);
  let [x, y] = input[line + 1].split(' ').map(Number); // 현재위치
  let [targetX, targetY] = input[line + 2].split(' ').map(Number); // 목표위치
  let visited = []; // 방문정보
  for (let i = 0; i < l; i++) visited.push(new Array(l).fill(0));
  queue = new Queue(); // 너비우선탐색(BFS) 수행
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];
    for (let i = 0; i < 8; i++) {
      // 현재위치에서이동하고자하는위치확인
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue; // 공간을벗어난경우무시
      if (visited[nx][ny] == 0) {
        // 방문하지않은위치인경우
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3; // 다음테스트케이스로이동
  console.log(visited[targetX][targetY] - 1); // 항상도달가능
}
