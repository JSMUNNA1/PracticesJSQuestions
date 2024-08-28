function ex143(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
              if(arr[i].length>arr[j].length){
                       let temp=arr[i];
                       arr[i]=arr[j];
                       arr[j]=temp;
              }
        }
    }    
    return arr;

}

console.log(ex143(['hhh','','fswe','ww','c']));
