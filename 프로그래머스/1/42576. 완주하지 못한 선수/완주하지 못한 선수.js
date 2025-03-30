function solution(participant, completion) {
  const cMap = new Map();
  for(const i of completion) {
    let val = cMap.get(i)
    if(!val) {
      cMap.set(i, 1)  
    } else {  
      cMap.set(i, val+1)   
    } 
  }
  let result = ''
  for(const i of participant) {
    let val = cMap.get(i)
    if(!val || 0){
      result = i
      break;
    }else {
      cMap.set(i, val-1)
    }
  }
  return result;
}