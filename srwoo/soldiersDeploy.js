const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
7
15 11 4 8 5 2 4
`.toString().trim().split('\n');

const TARGETLIST = input[1].split(' ').map(Number);

// 이진 탐색을 수행하는 함수
// 해당 병사거 어느 위치에 들어가야하는지 찾는다.
// 
function binarySearch(arr, target) {
    let low = 0; // low는 배열의 가장 낮은 인덱스
    let high = arr.length - 1; // high는 배열의 가장 높은 인덱스로 초기화

    console.log("low: ", low);
    console.log("high: ", high);

    while (low <= high) { 
        let mid = Math.floor((low + high) / 2); // mid는 현재 검색 범위의 중간 지점

        if (arr[mid] > target) {
            low = mid + 1; // target보다 크면, 탐색 범위를 오른쪽으로 좁힙니다. (low = mid + 1)
        } else {
            high = mid - 1; // 그렇지 않으면 탐색 범위를 왼쪽으로 좁힙니다. 
        }
        console.log("mid: ", mid);
    }

    return low;
}

function maxSurvivingSoldiers(n, strengths) {
    let lis = []; // 최장 증가 부분 수열을 저장하는 배열

    for (let i = 0; i < n; i++) {
        let idx = binarySearch(lis, strengths[i]);
        console.log("idx: ", idx);

        if (idx === lis.length) {
            lis.push(strengths[i]);
        } else {
            lis[idx] = strengths[i];
        }

        console.log('TARGETLIST, TARGETLIST');
        console.log("lis: ", lis);
        console.log("\n");
    }

    //전체 병사 수에서 최장 증가 부분 수열의 길이ㅊㅊㅊ
    return n - lis.length; // 남아있는 병사의 수는 전체 병사 수에서 최장 증가 부분 수열의 길이를 뺀 값
}

// 결과 출력
console.log(TARGETLIST);

let result = maxSurvivingSoldiers(Number(input[0]), TARGETLIST);
console.log(result);