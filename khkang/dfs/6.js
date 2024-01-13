/* 

알고리즘 수업 - 깊이 우선 탐색 4

백준 링크 : https://www.acmicpc.net/problem/24482

문제
오늘도 서준이는 깊이 우선 탐색(DFS) 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.

N개의 정점과 M개의 간선으로 구성된 무방향 그래프(undirected graph)가 주어진다. 정점 번호는 1번부터 N번이고 모든 간선의 가중치는 1이다. 정점 R에서 시작하여 깊이 우선 탐색으로 만들어 지는 트리를 깊이 우선 탐색 트리라고 하자. 깊이 우선 탐색 트리에 있는 모든 노드의 깊이(depth)를 출력하자. 시작 정점 R의 깊이는 0이고 방문 되지 않는 노드의 깊이는 -1로 출력하자.

깊이 우선 탐색 의사 코드는 다음과 같다. 인접 정점은 내림차순으로 방문한다.

dfs(V, E, R) {  # V : 정점 집합, E : 간선 집합, R : 시작 정점
    visited[R] <- YES;  # 시작 정점 R을 방문 했다고 표시한다.
    for each x ∈ E(R)  # E(R) : 정점 R의 인접 정점 집합.(정점 번호를 내림차순으로 방문한다)
        if (visited[x] = NO) then dfs(V, E, x);
}
입력
첫째 줄에 정점의 수 N (5 ≤ N ≤ 100,000), 간선의 수 M (1 ≤ M ≤ 200,000), 시작 정점 R (1 ≤ R ≤ N)이 주어진다.

다음 M개 줄에 간선 정보 u v가 주어지며 정점 u와 정점 v의 가중치 1인 양방향 간선을 나타낸다. (1 ≤ u < v ≤ N, u ≠ v) 모든 간선의 (u, v) 쌍의 값은 서로 다르다.

출력
첫째 줄부터 N개의 줄에 정수를 한 개씩 출력한다. i번째 줄에는 정점 i의 깊이를 출력한다. 시작 정점 R의 깊이는 0이고 방문 되지 않는 노드의 깊이는 -1로 출력하자.


*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `5 5 1
1 4
1 2
2 3
2 4
3 4`
  .trim()
  .split('\n');

//n : 정점 개수, m : 간선 개수, r: 시작 정점
const [n, m, r] = input[0].split(' ');
let graph = [];

for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);
let depths = new Array(n + 1).fill(-1);

let answer = '';
const dfs = (v, depth) => {
  visited[v] = true;
  depths[v] = depth;
  let curNode = graph[v].sort((a, b) => b - a);
  for (let i of curNode) {
    if (visited[i]) {
      continue;
    }
    dfs(i, depth + 1);
  }
};

dfs(r, 0);
for (let i = 1; i <= n; i++) {
  if (depths[i] == 0 || depths[i]) {
    answer += String(depths[i]);
  } else {
    answer += '-1';
  }
  answer += '\n';
}

console.log(answer);
