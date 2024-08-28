function ex125(arr){
         return arr.reduce((pr,cr)=>pr.length>cr.length?pr:cr)
}

console.log(ex125(['muna','mu','munna','munnad']));
