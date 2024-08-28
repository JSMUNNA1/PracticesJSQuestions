function ex81(num1){
       let res=0
    while(num1){
     res+=num1%10;
     num1=Math.floor(num1/10);

    }
    return res;
}
console.log(ex81(9999));
