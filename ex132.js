function ex132(num){
       let set=new Set();
       let arr=[];
        for(let i=2;i<=num;){
             if(isPrime(i) && num%i==0){
                
                 arr.push(i)
                  set.add(i)
                  num=num/i;
             }else{
                 i++;
             }
        }
     console.log(arr.join("*"));
     
        return set;
}
function isPrime(i){
      for(let j=2;i<=i;j++){
          if(j<i &&j%i===0)return false;
          if(j===i) return true
      }
}

console.log(ex132(110));


console.log(Math.sqrt(100));
