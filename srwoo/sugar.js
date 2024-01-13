const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = 4;

const num = Number(input);
const resultList = [];

for(let j=5; j<=num; j+=5){
    if((num-j)%3 === 0){
        const val = parseInt(j/5);
        const re = parseInt((num-j)/3);
        resultList.push(val + re);
    }
}

for(let j=3; j<=num; j+=3){
    if((num-j)%5 === 0){
        const val = parseInt(j/3);
        const re = parseInt((num-j)/5);
        resultList.push(val + re);
    }
}

console.log(resultList.length ? Math.min.apply(null, resultList) > 0 ? Math.min.apply(null, resultList) : -1 : -1);