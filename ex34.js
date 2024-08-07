function checkBig(num1,num2){
    if((num1>=40&&num1<=60)&&(num2>=40&&num2<=60)){
        return  num1>num2?num1:num2;
    }else{
        return 'number is the out the range between 40 & 60'
    }
}

console.log(checkBig(55,58));
console.log(checkBig(35,58));
