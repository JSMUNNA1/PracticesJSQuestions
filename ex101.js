function ex101(str){
       let x=0
       let y=0;
      for(let i=0;i<str.length-1;i++){
         if(str[i]<='Z' &&str[i]>='A'&&str[i+1]<='Z' &&str[i+1]>='A'){
               return false;
         }else if(str[i]<='z' &&str[i]>='a'&&str[i+1]<='z' &&str[i+1]>='a'){
              return false;
         }
      }   
      
      return true;
}
console.log(ex101('MyM'));
console.log(ex101('MyMy'));
console.log(ex101('mYmX'));
console.log(ex101('mYmXX'));
   