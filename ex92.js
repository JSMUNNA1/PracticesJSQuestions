function ex92(arr){
 
   let max=0
  for(let i=0;i<arr.length-1;i++){
       let m=Math.abs(arr[i]-arr[i+1]);
       max=Math.max(max,m);
  }
  return max;
}

console.log(ex92([1,23,2,3,44,5,5,]));
