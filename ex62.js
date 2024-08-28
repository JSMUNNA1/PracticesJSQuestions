function ex62(str){
  if(str.length>3){
    return str.slice(-3)+str.slice(0,str.length-3);
  }else{
    return str;
  }
}

console.log(ex62("stre"));
