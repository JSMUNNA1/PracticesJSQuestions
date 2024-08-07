function largestNum(num1,num2,num3){
  let largest=0;
  if(num1<num2){
    if(num2<num3){
     largest=num3;
    }else{
      largest=num2;
    }
  }else{
        if(num1<num3){
          largest=num3;
        }else{
          largest=num1;
        }
  }
  return largest;
}
console.log(largestNum(1,2,3));
console.log(largestNum(3,2,1));
console.log(largestNum(2,3,1));
console.log(largestNum(1,3,2));
