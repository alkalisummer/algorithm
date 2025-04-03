function solution(s, skip, index) {
  const skipSet = new Set(skip);
  let result = '';

  for (let char of s) {
    let count = 0;
    let code = char.charCodeAt(0);

    while (count < index) {
      code += 1;
      if (code > 'z'.charCodeAt(0)) {
        code = 'a'.charCodeAt(0); // z 넘어가면 a로
      }
      if (skipSet.has(String.fromCharCode(code))) {
        continue;
      }
      count += 1;
    }

    result += String.fromCharCode(code);
  }

  return result;
}