const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
3
10
15
9
`.toString().trim().split('\n');

let [n, ...arr] = input.map(Number);

const list = [];
arr.sort((a, b)=> a-b).map((w) => {
    list.push(w*n);
    n--;
});

const weight = Math.max.apply(null, list);
console.log(weight);