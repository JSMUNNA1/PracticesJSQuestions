function ex141(arr1,arr2){
      let  count=0;
      let arr=[]
      for(let i=0;i<arr1.length;i++){
       if(arr2.includes(arr1[i])){
           if(arr.includes(arr1[i])){

           }else{
              arr.push(arr1[i]);
              count++
           }
       }
      }

      return count;
}

console.log(ex141([1,,2,2,3,3,4,5],[1,1,2,5,3,3,5]));
