const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
3 3
`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = [...Array(m)].fill(0);
let visit = [...Array(n)].fill(false);
let result = '';

const recursive = (depth) => {
    if(depth === m){
        result += `${arr.join(' ')}\n`;
        return;
    }

    for(let i=1; i<=n; i++){
        arr[depth] = i;
        visit[i] = true;
        recursive(depth+1);
        visit[i] = false;
    }
}

recursive(0);
console.log(result);