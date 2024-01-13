const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
5 8 20
5 8 17
0 0 0
`.toString().trim().split('\n');

// 5 8 20
// 20일 중에 8일 연속으로 쉴 수 있는 날은 -> 16일(2주치)
// 20일 중에 8일 연속으로 쉴 수 있는 날을 빼면 -> 4일..(1주치)
// 8일중에 5번 방문 2주치 (5*2) -> 10번
// 5번 방문중에 4일 1주치 (4*1) -> 4번
// 총 14번 방문

// 5 8 17
// 17일 중에 8일 연속으로 쉴 수 있는 날은 -> 16일(2주치)
// 17일 중에 8일 연속으로 쉴 수 있는 날을 빼면 -> 1일..(1주치)
// 8일중에 5번 방문 2주치 (5*2) -> 10번
// 5번 방문중에 1일 1주치 (1*1) -> 1번
// 총 11번 방문

// 3 8 20
// 20일 중에 8일 연속으로 쉴 수 있는 날은 -> 16일(2주치)
// 20일 중에 8일 연속으로 쉴 수 있는 날을 빼면 -> 4일..(1주치)
// 8일중에 3번 방문 2주치 (3*2) -> 6번
// 3번 방문중에 4일 1주치 (3*1) -> 3번
// 총 9번 방문

let result = '';
for(let i=0; i<input.length; i++){
    if(input[i] === '0 0 0') break;

    let [L, P, V] = input[i].split(' ').map(Number);
    result += `Case ${i+1}: ${(L*parseInt(V/P)) + Math.min(L, V%P)}\n`;
}
console.log(result);