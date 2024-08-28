function ex74(arr){
  let max= arr[0]<arr[arr.length-1]?arr[arr.length-1]:arr[0];
   for(let  i=0;i<arr.length;i++)  {
       arr[i]=max
   }   
           

         
}
let arr=[2,1,2,3,4]
  ex74(arr);
console.log(arr);
