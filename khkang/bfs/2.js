/* 

이분 그래프 

백준 링크 : https://www.acmicpc.net/problem/1707

문제
그래프의 정점의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때, 그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.
그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 구성되어 있는데, 첫째 줄에 테스트 케이스의 개수 K가 주어진다. 각 테스트 케이스의 첫째 줄에는 그래프의 정점의 개수 V와 간선의 개수 E가 빈 칸을 사이에 두고 순서대로 주어진다. 각 정점에는 1부터 V까지 차례로 번호가 붙어 있다. 이어서 둘째 줄부터 E개의 줄에 걸쳐 간선에 대한 정보가 주어지는데, 각 줄에 인접한 두 정점의 번호 u, v (u ≠ v)가 빈 칸을 사이에 두고 주어진다. 

출력
K개의 줄에 걸쳐 입력으로 주어진 그래프가 이분 그래프이면 YES, 아니면 NO를 순서대로 출력한다.

*/

// 미방문(color: -1), 빨강(color: 0), 파랑(color: 1)
function bfs(x, graph, visited) {
  queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0; // 처음 노드는 빨간색으로 칠하기
  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2; // 빨강 ↔ 파랑
        queue.enqueue(y);
      }
    }
  }
}
function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

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

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');
let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while (testCases--) {
  // 정점의 개수(V), 간선의 개수(E)
  let [v, e] = input[line].split(' ').map(Number);
  // 그래프 정보 입력받기
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [u, v] = input[line + i].split(' ').map(Number);
    graph[u].push([v]);
    graph[v].push([u]);
  }
  let visited = new Array(v + 1).fill(-1); // 방문 정보
  for (let i = 1; i <= v; i++) {
    // BFS를 이용해 색칠
    if (visited[i] == -1) bfs(i, graph, visited);
  }
  line += e + 1; // 다음 테스트 케이스로 이동
  if (isBipartite(graph, visited)) console.log('YES');
  else console.log('NO');
}
