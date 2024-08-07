function checkSpecificChar(str,char){
     if(str.length<1){
      return false;
     }
     
    //  for(let i=0;i<str.length;i++){
    //      if(str.charAt(i)===char &&(i>=1&&i<=3)) {
           
    //         return true;
    //      }
    //  }

    let sub=str.substring(1,4);
    if(sub.includes(char)){
        return true;
    }

     return false;
}

console.log(checkSpecificChar("cooling",'l'));
