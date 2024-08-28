function ex75(arr1,arr2){
     let n1=arr1.length;
     let n2=arr2.length;
     if(n1<3&& n2<3){
      return 'lenght of Array small Then 3'
     }
     let  mid1=Math.floor((n1)/2);
     let  mid2=Math.floor((n2)/2);
     return [arr1[mid1],arr2[mid2]]
}

console.log(ex75([1,2,3,4,5],[2,34,5,6,4,6]));
console.log(Math.ceil(2.3));
