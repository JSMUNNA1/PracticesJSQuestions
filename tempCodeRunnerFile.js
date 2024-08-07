function isSameRightMost(num1,num2,num3){
      if(num1%10===num2%10&&num2%10==num3%10){
        return true;
      }else{
        return false;
      }         
   
}

console.log(isSameRightMost(21,11,21));
