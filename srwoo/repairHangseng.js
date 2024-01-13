const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = 
`3 1
3 2 1`
// `4 2
// 1 2 100 101`
// `4 3
// 1 2 3 4`
.toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a,b) => a-b);

let count = 0;
let bas = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] > bas) {
        bas = arr[i] + (l-1) + 0.5;
        count++;
    }
}

console.log(count)