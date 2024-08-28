const ex78=(arr1)=>{
  let i=0;
      let j=0;
      let k=0;
  for(let i=0;i<arr1.length;i++){
      if(arr1[i]===40 &&j==0){
          j++;
      }else if(arr1[i]===20&& k==0){
        k++;
      }
       else if(arr1[i]===40&&j==1){
         return true;
      }else if(arr1[i]===20&&k==1)return true;
  }
    return false;

   
       
}

console.log(ex78([1,2,40,40]));
