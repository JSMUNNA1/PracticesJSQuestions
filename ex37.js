function first3Char(str){
      if(str.length<3){
        return str.toUpperCase();
      }else{
        return str.substring(0,3).toLowerCase()+str.substring(3,str.length);
          
      }
}

console.log(first3Char("SUNDAY"))
console.log(first3Char("SU"))