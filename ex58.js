function ex58(str){
    if(str.length<3){
       return false;
    }else{
      let str3=str.slice(str.length-3,str.length)

      return str3.repeat(4);
    }
}
console.log(ex58("munna"));
