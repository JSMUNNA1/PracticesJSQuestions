function ex96(arr){
   let sum=0
   for(let i=1;i<arr.length;i++){
        let diff=Math.abs(arr[i-1]-arr[i]);
        sum+=diff;
   }

   return sum;

}

console.log(ex96([1,2,3,2,-5]));
