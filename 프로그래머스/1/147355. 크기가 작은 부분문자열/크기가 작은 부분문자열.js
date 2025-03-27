function solution(t, p) {
   const sArr = [];
   const l = p.length;
   for(i=0; i<t.length; i++){
     if(t.substr(i)[l-1]) sArr.push(t.substr(i,l))    
   }
    console.log(sArr)
   let cnt = 0;
   sArr.map(i => {
       if(i<=p) cnt++;
   })
   return cnt
}