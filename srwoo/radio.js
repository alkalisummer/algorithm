// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['100 15', '1', '15'];
// const input = ['88 17', '3', '18', '1', '42'];
// const input = ['64 120', '1', '567']
// const input = ['0 6', '1', '5']

const start = Number(input[0].split(' ')[0]);
const end = Number(input[0].split(' ')[1]);

let ltems = [];
ltems.push({"num":start, "gap": Math.abs(start-end)});

for(let i=0; i<Number(input[1]); i++){
    num = Number(input[i+2]);
    ltems.push({"num":num, "gap": Math.abs(end-input[i+2])+1});
}
ltems.sort((a,b)=>a.gap-b.gap);

console.log(ltems);
// console.log(Math.abs(ltems[0].gap));