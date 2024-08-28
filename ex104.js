function ex104(arr,n){
     let max=-1;
     for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
              let val=Math.abs(arr[i]-arr[j]);
                if(val<=n){
                    max=Math.max(val,max);
                }
      }
      
     }

     return max;
}

console.log(ex104([10,29,29,2,9],10));
