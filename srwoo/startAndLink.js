const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0
`.toString().trim().split('\n');

let min = Number.MAX_SAFE_INTEGER;
let [p, ...arr] = input;
p = Number(p);
h = p/2;
arr = arr.map(a => a.split(' ').map(Number));
// console.log(p, h, arr)

const check = new Array(p).fill(0);
// console.log(check)

const recursive = (cnt, val) => {
    if(cnt === h){
        const st = [];
        const lt = [];

        let sSum = 0;
        let lSum = 0;

        for(let i=0; i<p; i++){
            if(check[i]){
                st.push(i);
            }else{
                lt.push(i);
            }
        }
        for(let i=0; i<h; i++){
            for(let j=i+1; j<h; j++){
                sSum += arr[st[i]][st[j]] + arr[st[j]][st[i]];
                lSum += arr[lt[i]][lt[j]] + arr[lt[j]][lt[i]];
            }
        }
        min = Math.min(min, Math.abs(sSum-lSum));
        return;
    }

    for(let i=val; i<p; i++){
        check[i] = 1;
        recursive(cnt+1, i+1);
        check[i] = 0;
    }
}

recursive(0, 0)
console.log(min);