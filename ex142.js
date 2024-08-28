function ex142(str){
     let str2=str.split("");
     for(let i=0;i<str2.length;i++){
         if(str2[i].startsWith(".")){
             str2[i]=str2[i].substring(1);
         }else if(str2[i].startsWith("..")){
              str2[i]=str2[i].substring(2);
         }
     }

     return str2.join("")
}

console.log(ex142("sum/se/.cc/..cce"));
