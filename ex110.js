function ex110(arr,n){
     let res=0;
       for(let i=0;i<arr.length;i++){
            if(arr[i]%2===0 &&n!==arr[i]){
                 res++;
            }
            if(arr[i]===n)
              return res;
       }

       return -1;
}

console.log(ex110([1,2,3,4,5,6],5));
