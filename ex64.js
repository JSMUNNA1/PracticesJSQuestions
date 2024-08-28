function ex64(str1,str2){
     let minlength=Math.min(str1.length,str2.length);

     return str1.slice(-minlength)+str2.slice(-minlength)
}



console.log(ex64("munnnna",'cc'));
console.log(ex64("mu",'cccvv'));
