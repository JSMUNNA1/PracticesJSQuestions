function ex113(num){
     let res=0;
     while(num>0){
       res+=num;
       num=Math.floor(num/2);
     }

     return res;
}
console.log(ex113(8));
