function ex100(arr1,arr2){
       for(let i=0;i<arr1.length;i++){
          if(arr2.indexOf(arr1[i])!==-1){
              return true;
          }
       }

       return false;
}


console.log(ex100([1,345,64,22,45,3],[24562,2345,25,2,1]));
