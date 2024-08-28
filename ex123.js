function ex123(arr){
      for(let i=0;i<arr.length;i++){
           if(arr.indexOf(i+1)<0){
                return false;
           }
      }

      return true;
}

console.log(ex123([1,2,3,4,5]));
console.log(ex123([1,2,3,5]));
