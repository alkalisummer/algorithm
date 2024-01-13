const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
2
5 6
0 0 1 0
`.toString().trim().split('\n');

const [idx, arr, operators] = input.map((v) => v.split(" ").map(Number));

const cal = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => parseInt(a / b),
];
let min = 1000000000;
let max = -1000000000;

const recursive = (cnt, val) => {
    if(cnt === idx-1){
        max = Math.max(max, val);
        min = Math.min(min, val);
    }else {
        for(let i=0; i<4; i++){
            if(operators[i] === 0) continue;

            operators[i]--;
            recursive(cnt+1, cal[i](val, arr[cnt+1]));
            operators[i]++;
        }
    }
}

recursive(0, arr[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);