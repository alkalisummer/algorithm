/*
그룹단어체커

백준 링크 : https://www.acmicpc.net/problem/1316

문제
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

출력
첫째 줄에 그룹 단어의 개수를 출력한다.

*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let input = ['9', 'aaa', 'aaazbz', 'babb', 'aazz', 'azbz', 'aabbaa', 'abacc', 'aba', 'zzaz'];

let loopNum = Number(input[0]);

let cnt = 0;

for (let i = 1; i <= loopNum; i++) {
  let str = input[i];
  let mySet = new Set(); // 고유한 값을 가지는 집합 자료구조
  for (let j = 0; j < str.length; j++) {
    if (mySet.has(str[j])) {
      // 고유한 값인지 확인
      break;
    }
    if (str[j + 1] && str[j] !== str[j + 1]) {
      // 옆 문자와 다르다면 set에 add
      mySet.add(str[j]);
    }
    if (j === str.length - 1) {
      // 문자열 전부 순회하면 그룹단어 개수 ++
      cnt++;
    }
  }
}

console.log(cnt);
