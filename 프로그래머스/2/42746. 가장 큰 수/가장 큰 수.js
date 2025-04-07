function solution(numbers) { 
  let result = "";
  const arr = numbers.map(i=>i.toString()).sort((a, b) => {
    const r1 = a + b;
    const r2 = b + a;
    if(r1 > r2){
      return -1    
    }else if(r1 < r2){
      return 1  
    }else {
      return 0
    }
  }) 
  result = arr[0] === '0'? '0': arr.join("")
  return result
}