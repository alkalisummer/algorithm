function solution(cards1, cards2, goal) {
  let result = 'No';
  let idx1 = 0;
  let idx2 = 0;
  for(i=0;i<goal.length; i++){
    const target = goal[i];
    if(cards1[idx1] === target){
      if(i === goal.length-1) result= 'Yes'
      idx1 ++;
      continue;
    }
    if(cards2[idx2] === target){
      if(i === goal.length-1) result= 'Yes'
      idx2 ++;
      continue;
    }
      break;     
  }
  
  return result;
}
