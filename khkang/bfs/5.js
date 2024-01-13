/* 

연결 요소의 개수

백준 링크 : https://www.acmicpc.net/problem/11724

문제
방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

출력
첫째 줄에 연결 요소의 개수를 출력한다.

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`
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
const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
let visited = new Array(n + 1).fill(0);

let cnt = 0;
const bfs = (start) => {
  let queue = new Queue();
  queue.enqueue(start);
  visited[start] = 1;
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    for (let nxt of graph[cur]) {
      if (visited[nxt] == 0) {
        visited[nxt] = 1;
        queue.enqueue(nxt);
      }
    }
  }
  cnt++;
};
for (let i = 1; i <= n; i++) {
  if (visited[i] == 0) bfs(i);
}
console.log(cnt);
