function ex122(arr){
           for(let i=0;i<arr.length-1;i++){
               if(arr[i]>arr[i+1]){
                    return false;
               }
           }

           return true;
}

const arr=[-3,-2,-1];

console.log(ex122(arr));
