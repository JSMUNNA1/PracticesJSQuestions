function ex72(arr){
    if(arr.length>3){
      if(arr[0]===arr[arr.length-1]){
        return true;
      }
    }
}

console.log(ex72([1,2,3,1]));
