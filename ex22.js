function removeChar(s,i){
  return s.slice(0,i)+s.slice(i+1,s.length);
}

 console.log(removeChar("munaj",2));