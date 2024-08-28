function ex105(num){
    if(num<10)return 0;
      let res=1;
      let sum=digitSum(num);
          
    while(sum>=10){
        sum=digitSum(sum); 
        res++; 
    }
     return res;
    
}
let digitSum=function(num){
      
     let sum=0
    while(num){
      sum+=num%10;
      num=Math.floor(num/10);
    }
    return sum;
}


console.log(ex105(1234));
