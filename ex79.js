function ex79(arr1){

      let i=0;
      let j=0;
      let k=0;
  for(let i=0;i<arr1.length;i++){
      if(arr1[i]===3 &&j==0){
          j++;
      }else if(arr1[i]===1&& k==0){
        k++;
      }
       else if(arr1[i]===40&&j==1){
         return false;
      }else if(arr1[i]===20&&k==1)return false;
  }
    return false;

   
       
}

console.log(ex78([1,2,40,40]));

