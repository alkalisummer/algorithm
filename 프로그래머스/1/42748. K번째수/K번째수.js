function solution(array, commands) {
  const result = []
  for(i = 0; i<commands.length; i++){
    const start = commands[i][0]-1;
    const end = commands[i][1];
    const tNum = commands[i][2];
    const target = array.slice(start, end)
    const sortTarget = target.sort((a, b) => a-b)
    result.push(sortTarget[tNum-1])
  }
    return result;
}