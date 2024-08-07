function checkNum1Num2Num3(num1,num2,num3){
     if((num1>=50&&num1<=99)||(num2>=50&&num2<=99)||(num3>=50&&num3<=99)){
      return true;
     }
     return false;
}
console.log(checkNum1Num2Num3(55,10,11));
console.log(checkNum1Num2Num3(55,85,11));
console.log(checkNum1Num2Num3(10,85,1));
console.log(checkNum1Num2Num3(10,10,2));