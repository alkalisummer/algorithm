const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
`.toString().trim().split('\n');

const PUBLICLIST = input[1].split(' ').map(Number).sort((a,b)=> a-b);
const TARGETLIST = input[3].split(' ').map(Number);
const STARTINDEX = 0;
const ENDINDEX = Number(input[0]);

// 값이 존재하는지 확인하는 함수
const binarySearch = (arr, target, start, end) => {
    if(start > end) return false
    let mid = parseInt((start + end)/2);

    if(arr[mid] === target){
        return true
    }else if(arr[mid] > target){
        return binarySearch(arr, target, start, mid-1);
    }else{
        return binarySearch(arr, target, mid+1, end);
    }
}

let result = '';
for(let i=0; i<TARGETLIST.length; i++){
    const find = binarySearch(PUBLICLIST, TARGETLIST[i], STARTINDEX, ENDINDEX);
    result += (find ? 1 : 0) + ' ';
}

console.log(result.trim()); // 1 0 0 1 1 0 0 1