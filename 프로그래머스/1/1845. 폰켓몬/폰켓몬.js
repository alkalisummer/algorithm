function solution(nums) {
  let result = 0;
  const nSet = new Set(nums);
  const cnt = nums.length/2;
  if(nSet.size <= cnt){
    result = nSet.size    
  }else {
    result = cnt
  }
  return result
}