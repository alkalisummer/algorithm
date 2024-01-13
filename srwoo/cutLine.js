const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
5 2
100 76 85 93 98
`.toString().trim().split('\n');

const [p, c] = input[0].split(' ').map(Number);
const socreList = input[1].split(' ').map(Number).sort((a, b)=> a - b);

let cutLineSocre = 0; 
for(let i=0; i<c; i++){
    cutLineSocre = socreList.pop();
}

console.log(cutLineSocre);