function ex134(str){

 let  str2=[];
    for(let i=0;i<str.length;i++){
          let pos=str.charCodeAt(i)-'a'.charCodeAt(0);
             str2[i]=String.fromCharCode(25-pos+'a'.charCodeAt(0));
         
    }
     return str2.join("");
}

console.log(ex134("abcdef"));
