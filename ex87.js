function ex87(arr1,arr2){
     arr1.sort();
     arr2.sort();

     for(let i=0;i<arr1.length;i++){
         if(arr1[i]!==arr2[i]){
          return false;
         
         }
     }

     return true;
}

console.log(ex87([10,20,30,40],[20,10,40,30]));
console.log(ex87([10,20,30,40],[20,10,30,30]));
