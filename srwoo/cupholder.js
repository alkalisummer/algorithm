const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
4
SLLS
`.toString().trim().split('\n');

const seat = input[1].split('');
let result = '*';
let i = 0;

while(1){
    if(i >= seat.length){
        if(result.substring(result.length-1) !== '*') result += '*';
        break;
    }
    result += seat[i];

    if(seat[i] === 'L'){
        result += 'L*';
        i+=2;
        continue;
    }else{
        result += '*';
        i++;
    }
}

const p = Number(input[0]);
const c = result.split('*').length-1;

console.log(Math.min(p,c));