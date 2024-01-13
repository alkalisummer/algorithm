// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = ['sequence', 'subsequence'];
const input = ['person', 'compression'];
// const input = ['VERDI', 'vivaVittorioEmanueleReDiItalia'];
// const input = ['caseDoesMatter', 'CaseDoesMatter'];
// const input = ['cc', 'CaseDoesMattercc'];
 
const word = input[0].split('');
const word2 = input[1].split('');

let result = [];
let index = 0
for(let i=0; i<word2.length; i++){
    result.push(input[1].indexOf(word[index], i+1) > -1);
    console.log(input[1].indexOf(word[index], i+1))
    if(input[1].indexOf(word[index], i+1) > -1){
        index++;
    }
}
console.log(result);
const trueCount = result.filter(value => value === true).length;

console.log(trueCount>=input[0].length ? 'Yes' : 'No');