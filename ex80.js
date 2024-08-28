function ex80(arr){
      let temp=arr[0]
     arr[0]=arr[arr.length-1];
     arr[arr.length-1]=temp;
}

const arr=[2,3,4,5,6]
ex80(arr)
console.log(arr);
