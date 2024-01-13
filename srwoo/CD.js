const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
3 3
1
2
3
1
2
4
2 2
6
8
7
6
0 0
`.toString().trim().split('\n');

let bas = 0;
let count = 0;
let sangguen = [];
let sunyoung = [];

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length-1;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(target === arr[mid]){
            return true;
        }
        if(target > arr[mid]){
            start = mid+1;
        }else if(target < arr[mid]){
            end = mid-1;
        }
    }
}

for(let i=0; i<input.length; i++){
    if(input[i] === '0 0') break;
    
    if(input[i].includes(' ')){
        bas = i + Number(input[i].split(' ')[0]) + 1;
    }else{
        if(i < bas){
            sangguen.push(input[i]);
            if(binarySearch(sunyoung, input[i])) count++;
        } else {
            sunyoung.push(input[i]);
            if(binarySearch(sangguen, input[i])) count++;
        }
    }
}

console.log(count)