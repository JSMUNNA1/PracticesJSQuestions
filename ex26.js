function example(s){
  let n=s.length;
  if(n<3){
    return s;
  }else{
    let str=s.substring(n-3,n);
    return (str+s+str); 
    
  }
  
}

console.log(example("mun"));
console.log(example("munn"));
console.log(example("mu"));