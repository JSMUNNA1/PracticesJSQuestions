function ex102(arr){
     let count=0;
     for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j])
            count++;
      }
     }
     return count;
}

console.log(ex102([0,1,2,5,4]));
