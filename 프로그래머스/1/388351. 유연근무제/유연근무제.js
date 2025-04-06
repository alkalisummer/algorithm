function solution(schedules, timelogs, startday) {
   let result = 0;
   for(i=0; i<schedules.length; i++){
     let standard = schedules[i]+10;
     let min = standard.toString().slice(-2)
     standard =parseInt(standard/100)*100 + (parseInt(min/60)*100) + min%60
     console.log(standard)
     let isWinner = true;
     let day = startday;
     for(j=0; j<7; j++){
       if(day>7) day = 1
       if([6, 7].includes(day)){
         day++;
         continue;
       } 
       if(timelogs[i][j] > standard) isWinner = false
       day++;
     }
     if (isWinner) result++;
   }
    return result;
   }