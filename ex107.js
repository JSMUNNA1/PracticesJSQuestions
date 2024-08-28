function ex107(arr){
     let divisblePairs=0;
     for(let i=0;i<arr.length-1;i++){
        
            for(j=i+1;j<arr.length;j++){
              if(arr[j]%arr[i]===0||arr[i]%arr[j]===0){
                divisblePairs++;
            }
            

        }
     }

     return divisblePairs;
}

console.log(ex107([1,2,3]));
