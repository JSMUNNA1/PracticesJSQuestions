function check(num1,num2){
        if((num1>=40&&num1<=60)&&(num2>=40&&num2<=60)){
          return true;
        }else if((num1>=70&&num1<=100)&&(num2>=70&&num2<=100)){
          return true
        }else{
          return false;
        }
}

console.log(check(66,50));
console.log(check(90,60));
console.log(check(80,90));
console.log(check(44,90));
