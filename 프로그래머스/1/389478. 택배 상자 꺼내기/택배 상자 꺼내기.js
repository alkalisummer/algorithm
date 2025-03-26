function solution(n, w, num) {
   const store = [];
    
   let layer = parseInt(n / w) ;
   if(n % w > 0) layer += 1;
    
   for(i = 1; i <= layer; i++){
       store[i-1] = []
      let cnt = i % 2 === 0 ? w-1 : 0
      for(j = ((i-1)*w) + 1; j<= (i*w); j++) {
         if(j > n) break;
         store[i-1][cnt] = j
          i % 2 === 0 ? cnt-- : cnt ++;
      }
   }
    console.log(store)
   
   let l = 0;
   let idx = 0;
    let result = 0;
   store.map((i,index) => {
       let r = i.findIndex(j => j === num)
      
       if(r != -1) {
            console.log(r)
       console.log(index)
         l = index 
         idx = r
       }
   })
    result = store.length - l
   if (!store[store.length-1][idx]){
       result -= 1
   }
return result
}