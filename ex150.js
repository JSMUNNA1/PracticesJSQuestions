function ex150(num){
        
        let arr=[]
        while(num){
          arr.unshift(num%10);
          num=Math.floor(num/10);    
        }
        console.log(arr);
          let r=10
        
     if(arr.length%2!==0)return false;
       let res=0
     for(let i=0;i<arr.length;i++){
         
         if(i%2===0){
          res=res*10+arr[i]
          
         }else{
          
            
         }

     }

     return res;
}
 console.log(ex150([1234]));
 