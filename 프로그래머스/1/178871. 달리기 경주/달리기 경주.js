function solution(players, callings) {
 const nameToIndex = new Map();
  const result = players.slice(); 

  for (let i = 0; i < result.length; i++) {
    nameToIndex.set(result[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    const name = callings[i];
    const idx = nameToIndex.get(name);
    const prevIdx = idx - 1;

    const temp = result[prevIdx];
    result[prevIdx] = name;
    result[idx] = temp;

    nameToIndex.set(name, prevIdx);
    nameToIndex.set(temp, idx);
  }
 return result
}
