function ex84(str){
   let strarr=str.split('');
   for(let i=0;i<strarr.length;i++){
       if(strarr[i]==='Z'){
         strarr[i]='A'
       }else if(strarr[i]==='z'){
          strarr[i]='a'
       }else{
          strarr[i]=String.fromCharCode(str.charCodeAt(i)+1);
       }
   }
     return strarr.join('');

}

console.log(ex84("MunnaZ"));
