/*

CD 

백준 링크 : https://www.acmicpc.net/problem/4158

상근이와 선영이는 동시에 가지고 있는 CD를 팔려고 한다. CD를 몇 개나 팔 수 있을까?

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 상근이가 가지고 있는 CD의 수 N, 선영이가 가지고 있는 CD의 수 M이 주어진다. N과 M은 최대 백만이다. 다음 줄부터 N개 줄에는 상근이가 가지고 있는 CD의 번호가 오름차순으로 주어진다. 다음 M개 줄에는 선영이가 가지고 있는 CD의 번호가 오름차순으로 주어진다. CD의 번호는 십억을 넘지 않는 양의 정수이다. 입력의 마지막 줄에는 0 0이 주어진다.

상근이와 선영이가 같은 CD를 여러장 가지고 있는 경우는 없다.

출력
두 사람이 동시에 가지고 있는 CD의 개수를 출력한다.

*/

//const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['3 3', '1', '2', '3', '1', '2', '4', '3 3', '1', '2', '3', '1', '2', '3', '3 3', '1', '2', '3', '1', '2', '3', '0 0'];

let line = 0; // 현재 라인 인덱스

while (true) {
  const data = input[line].split(' ').map(Number);
  const n = data[0]; //상근 cd 개수
  const m = data[1]; // 선영 cd 개수
  let cnt = 0;

  if (n === 0 && m === 0) {
    // '0 0' 인 경우 break
    break;
  }

  let nIdx = line + 1; //상근 cd 시작 인덱스
  let mIdx = line + n + 1; // 선영 cd 시작 인덱스

  while (true) {
    if (nIdx > line + n || mIdx > line + n + m) {
      //상근이나 선영이중 하나라도 먼저 배열 끝까지 도달하면 종료
      break;
    }

    let nVal = Number(input[nIdx]);
    let mVal = Number(input[mIdx]);

    if (nVal === mVal) {
      // 값이 같으면 count 하고 둘다 인덱스 증가
      cnt++;
      nIdx++;
      mIdx++;
    } else if (nVal > mVal) {
      // 두명다 오름차순 되어있다는 특성을 사용하여 값 비교시 작은쪽 인덱스를 증가 -> 작은 수를 가진 사람이 이후 뒷 숫자들중 큰수와 같은수가 있을수 있기 때문
      mIdx++;
    } else {
      nIdx++;
    }
  }

  line += n + m + 1; // 다음 테스트 케이스로 이동
  console.log(cnt);
}
