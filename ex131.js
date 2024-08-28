function ex131(arr){
     let arr2=[];
      arr2[0]=arr[0];

     for(let i=0;i<arr.length;i++){
        arr2[i]=fill(i,arr);
     }
     return arr2;
}

function fill(i,arr){
         let sum=0;
          for(let j=0;j<=i;j++){
               sum+=arr[j];  
          }
          return sum;
}

console.log(ex131([1,2,3,4,5]));
