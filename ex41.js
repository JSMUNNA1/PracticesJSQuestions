function checkNums(num1,num2,num3){
   if(num1===num2 &&num2===num3){
    return 30;
   }else if(num1===num2 ||num1===num3 ||num2==num3){
        return 40;  
   }else{
    return 20;
   }

}

console.log(checkNums(12,12,9));
console.log(checkNums(9,12,9));
console.log(checkNums(7,12,9));
console.log(checkNums(9,9,9));
