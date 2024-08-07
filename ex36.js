// function lastTreedigitIsSame(num1,num2,num3){
//        num1=num1%10;
//        num2=num2%10;
//        num3=num3%10;
    
//      console.log(num1);
//      console.log(num2);
//      console.log(num3);
//      return num1===num2&&num2===num3;
// }

// console.log(lastTreedigitIsSame(10,20,30));
  
const area=function(r){
      return Math.PI*r*r;
} 
const pridi=function(r){
    return 2*Math.PI*r;
}
function calculator(arr,logic){
     
    let res=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
      res.push(logic(arr[i]))
    }
    return res;
}
let arr=[1,2,3,4,5];
console.log(calculator(arr,area));
console.log(calculator(arr,pridi));
