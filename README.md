# algorithm-study-js

javascript로 공부하는 알고리즘
<br><br>

## 1. 시간복잡도

#### 빅오 표기법(Big-O Notation)

가장 빠르게 증가하는 항만을 고려하는 표기법(제일 위부터 빠른순)

- O(1) : 상수 시간(constant time)
- O(logN) : 로그 시간(log time)
- O(N) : 선형 시간(linear time)
- O(NlogN) : 로그 선형 시간(log-linear time)
- O(N^2) : 이차 시간(quadratic time)
- O(N^3) : 삼차 시간(cubic time)
- O(2^N) : 지수 시간(exponential time)

<br><br>

## 2. 기본입력

#### fs모듈

입력데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
예를 들어 /dev/stdin 파일에 적힌 테스트를 읽어오는 경우, 다음과 같이 코드를 작성
기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환

```
//readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);

```

#### readline 모듈

한 줄씩 입력을 받아서, 처리하여 정답을 출력할때는 readline 모듈을 사용할 수 있다.

```
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  input.push(line);
}).on('close', function() {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
}) ;

```

<br><br>

## 3. 자료구조

- 스택(Stack) : 마지막에 들어온 것을 먼저 처리 하는 후입선출(LIFO), 자바스크립트에서는 배열을 활용
  <br>
- 큐(Queue) : 먼저 들어온 것을 먼저 처리 하는 선입선출(FIFO), 직접 구현 하여 사용(아래 코드 참고)
  <br>
- 우선순위 큐(Priority Queue) : 가장 우선순위가 높은 데이터를 먼저 처리, 우선순위 큐는 일반적으로 힙(heap)을 이용하여 구현
  <br>
- 힙(Heap) : 원소들 중에서 최댓값 혹은 최솟값을 빠르게 찾아내는 자료구조(완전 이진트리 자료구조를 따름), 우선순위가 높은 노드가 루트에 위치
  <br>
  최대 힙(max heap): 값이 큰 원소부터 추출한다.
  부모 노드가 자식노드보다 값이 큰 완전 이진 트리를 의미 -> 루트 노드가 가장 큰 값을 가지며, 값이 큰 데이터가 우선순위를 가진다.
  <br>
  최소 힙(min heap): 값이 작은 원소부터 추출한다.
  부모노드의 키 값이 자식 노드의 키 값보다 항상 작다. -> 루트 노드가 가장 작으며, 값이 작은 데이터가 우선순위를 가진다.
  <br>
  힙은 원소의 삽입과 삭제를 위해 O(logN)의 수행시간을 요구한다.
  <br>
  단순한 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다. -> 이 경우 시간복잡도는 O(NlogN) 이다.

---

#### javascript 큐(Queue) 구현하기

```
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 사용법

// 구현된 큐(Queue) 라이브러리 사용
queue = new Queue();

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7)
// - 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

// 먼저 들어온 순서대로 출력
while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}

```
