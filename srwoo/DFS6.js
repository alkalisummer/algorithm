const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
5 5 1
1 4
1 2
2 3
2 4
3 4
`.toString().trim().split('\n');

const [n, m, r] = input[0].split(' ').map(Number);
let graph = new Map();
let visited = new Array(n+1).fill(false);
// [ 0, 0, 0, 0, 0 ]
let depth = new Array(n+1).fill(-1);
// [ -1, -1, -1, -1, -1 ]
let cnt = 1;
let sum = 0;

for(let i=1; i<=n; i++){
    graph.set(i, []);
}
// Map(5) { 1 => [], 2 => [], 3 => [], 4 => [], 5 => [] } 

for(let i=1; i<=m; i++){
    const [x, y] = input[i].split(' ').map(Number);
    graph.get(x).push(y);
    graph.get(y).push(x);
}
/* Map(5) {
  1 => [ 4, 2 ],     
  2 => [ 1, 3, 4 ],  
  3 => [ 2, 4 ],     
  4 => [ 1, 2, 3 ],
  5 => []
} */

graph.forEach((v) => {
    v.sort((a, b) => b-a);
});
/* Map(5) {
  1 => [ 2, 4 ],     
  2 => [ 1, 3, 4 ],  
  3 => [ 2, 4 ],     
  4 => [ 1, 2, 3 ],  
  5 => []
} */

const dfs = (node, depth) => {
    if(visited[node] === false){
        sum += depth*cnt;

        visited[node] = true;
        cnt++;
        graph.get(node).forEach((v)=>{
            dfs(v, depth+1);
        })
    }
}
// [ 1, 2, 3, 4, 0 ]

dfs(r, 0);
console.log(sum);
// 1,2,3,4,0
// 0,1,2,3,-1
// ----------
// 0,2,6,12,0