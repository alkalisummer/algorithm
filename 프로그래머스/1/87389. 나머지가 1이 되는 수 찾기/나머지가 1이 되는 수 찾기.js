function solution(n) {
   let x = n;
   for(i = 1; i <n; i++){
     if(n % i === 1 && i < x){
        x=i
     }      
   }
    return x;
}