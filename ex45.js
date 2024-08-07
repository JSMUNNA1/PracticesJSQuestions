function check(num1,num2){
      if(num1+num2==15||Math.abs(num1-num2)===15||num1===15||num2===15){
        return true;
      }

      return false;
}

console.log(check(11,15));