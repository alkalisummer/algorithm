function solution(name, yearning, photo) {
    const nameMap = new Map();
    for(i = 0; i < name.length; i++) {
      nameMap.set(name[i], yearning[i])    
    }
    let total = [];
    photo.map(arr => {
        let score = 0
        arr.map(i => {
          s = nameMap.get(i);
          if(s) {
            score += s
          }
        })
        total.push(score)
    })
    
    return total;
}