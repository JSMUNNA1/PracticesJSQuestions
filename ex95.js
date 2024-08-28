function ex95(arr,oldValue,newValue){
    let res=    arr.map((item)=>{
         if(item===oldValue){
           item=newValue;
         }
         return item;

      })
      return res
}

console.log(ex95([1,2,3,4,5],3,5));
