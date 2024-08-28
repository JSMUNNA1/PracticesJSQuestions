function ex109(num){
        let res=[];
        for(let i=2;i<=num;i++){
          if(isPrimeNumber(i)){
              res.push(i);
          }
        }
        return res;
              
}

function isPrimeNumber(num){
        
      for(let i=2;i<=num-1;i++){
           if(num%i===0){
               return false;
           }

      }

      return true;
}

console.log(ex109(11));
console.log(ex109(18));
