function factorial(n) {
  let result = BigInt(1); // Initialize result as BigInt(1)

  for (let i = 1; i <= n; i++) {
      result *= BigInt(i); // Multiply using BigInt
  }

  return result;
}

const findZero=(n)=>{
     console.log(n);
     
   let res=0
    while(n){
      let v=n%10n
         
      if(v!==0n){
         break;
      }
        res++;
       n=n/10n;
    }
    return res; 
   
}
const numliternZero=(num)=>{
    let fact=BigInt(0);
  
    
    fact=factorial(num)
   
    
    return findZero(fact)
  }

const number = 30;
console.log(`The factorial of ${number} is: ${factorial(number)}`);
console.log(numliternZero(30));

