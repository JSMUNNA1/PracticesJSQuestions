function ex91(arr,k){
      let bigSum=0
     for(let i=0;i<arr.length;i++){
          sum=0;
          for(let j=i;j<k+i;j++){
           sum+=arr[j];
           
          }
          if(bigSum<sum){
            bigSum=sum;
          }
     }
     return bigSum;
}

console.log(ex91([1,2,3,4,1],3));
