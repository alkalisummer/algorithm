/* 

노드사이의 거리 

백준 링크 : https://www.acmicpc.net/problem/1240

문제
 
$N$개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

입력
첫째 줄에 노드의 개수 
$N$과 거리를 알고 싶은 노드 쌍의 개수 
$M$이 입력되고 다음 
$N-1$개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다. 그 다음 줄에는 거리를 알고 싶은 
$M$개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

출력
 
$M$개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

제한
 
2≤N≤1000
 
1≤M≤1000 
트리 상에 연결된 두 점과 거리는 
10000 이하인 자연수이다.
트리 노드의 번호는 
1부터 N까지 자연수이며, 두 노드가 같은 번호를 갖는 경우는 없다.

*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `4 2
2 1 2
4 3 2
1 4 3
1 4
3 2`
  .trim()
  .split('\n');

// n = 노드의 개수, m = 알고싶은 노드 쌍의 개수, lcnt = 트리상 두점과의 거리
const [n, m] = input[0].split(' ').map(Number);
const lCnt = n - 1;

let graph = [];
let dtne = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
  dtne[i] = new Map();
}
for (let i = 1; i <= lCnt; i++) {
  let [x, y, z] = input[i].split(' ').map(Number);

  graph[x].push(y);
  graph[y].push(x);

  dtne[x].set(y, z);
  dtne[y].set(x, z);
}
console.log(dtne);
console.log(graph);

function dfs(stt, end, visited, answer) {
  if (stt == end) {
    console.log(answer);
    return;
  }
  visited[stt] = true;
  for (let i of graph[stt]) {
    if (visited[i]) continue;
    let d = dtne[stt].get(i);
    dfs(i, end, visited, answer + d);
  }
}

for (let i = 1; i <= m; i++) {
  const [stt, end] = input[lCnt + i].split(' ').map(Number);
  let visited = new Array(n + 1).fill(false);
  let answer = 0;
  dfs(stt, end, visited, answer);
}
