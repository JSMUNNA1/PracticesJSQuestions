function ex94(arr){
      let max=arr.reduce((pr,cur)=>Math.max(pr,cur))
      console.log(max);
      
     const ans=[]
        for(let i=0;i<=max;i++){
           ans.push(0)
        }
      for(let i=0;i<arr.length;i++){
          
              
               ans[arr[i]]++;
           
      }
      console.log(ans);
      
       let resmax=0;
       let res=0;
  for(let i=0;i<=max;i++){
       if(ans[i]>resmax){
        res=i
        resmax=ans[i]
       }
  }
  return res;

}
console.log(ex94([1,0,32,32,32, 32,32, 2, 3, 3,3,3]))

