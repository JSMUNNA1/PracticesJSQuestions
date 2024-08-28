function ex88(nun1,num2,dividor){
     if(nun1%dividor===0&&num2%dividor===0||nun1%dividor!==0&&num2%dividor!==0){
      return true;

     }else{
      return false;
     }
}

console.log(ex88(88,6,3));
