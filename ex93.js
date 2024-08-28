function ex93(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j!==i&&j<arr.length;j++){
             max=Math.max(max,Math.abs(arr[i]-arr[j]));
        }
    }
    return max;
}

console.log(ex93([5,2,3,4,18,6]));
