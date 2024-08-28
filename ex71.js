function ex71(arr){
     return arr[0]==1||arr[arr.length-1]==1;
}

console.log(ex71([1,23,43,1]));
console.log(ex71([0,23,43,1]));
console.log(ex71([0,23,43,0]));
