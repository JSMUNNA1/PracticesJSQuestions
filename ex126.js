function ex126(arr){
         return arr.reduce((pr,cr)=>pr%2==0&&cr<pr?pr:cr)
}

console.log(ex126([11,22,55,44]));
