function ex103(num){
      res=[];
      while(num){
         res.push(num%10);
         num=Math.floor(num/10);
      }
       let result=-Infinity
       
      for(let i=0;i<=res.length-1;i++){
        let n=0;
        for(let j=res.length-1;j>=0;j--){
              if(j!==i){
                  n=n*10+res[j];
              }
              
        }     

        result=Math.max(result,n);
      }
      return result;
}

console.log(ex103(1234));
