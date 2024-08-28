function checkAB(str){
     
  return (/a...b/).test(str) || (/b...a/).test(str);
}
console.log(checkAB("avvvb"));
