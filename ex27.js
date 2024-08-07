function isStartWithJava(s){
     let n=s.length;
     if(n<4){
       return false;
     } else{
         let java=s.substring(0,4);
         console.log(java);
         if(java==='java'){
            return true;
         }
     }
          return false;
}

console.log(isStartWithJava("javaScript"));
console.log(isStartWithJava("javScript"));
console.log(isStartWithJava("avaScript"));