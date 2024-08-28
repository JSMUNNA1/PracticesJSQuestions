function ex66(str){

   let str3=str.slice(0,3).toLowerCase();
     if(str3==='new'){
      return 'NewYork'
     }else if(str3==='los'){
      return 'LosAngeles';
     }

     return false;

}

console.log(ex66("New"));
console.log(ex66("Los"));
console.log(ex66("vvvv"));
