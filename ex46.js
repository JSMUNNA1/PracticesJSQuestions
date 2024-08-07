function check7and11(num1,num2){
        if((num1%7===0||num1%11===0)&&(num2%7===0||num2%11===0)){
            return true;
        }else{
          return false;
        }
}

console.log(check7and11(11,21));
