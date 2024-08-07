function chagingLastAndfirst(s){
    let n=s.length;
    let str;
     if(n<=1){
       return s;
     }else{
         str=Object.assign([],s);
         let temp=str[0];
         str[0]=str[n-1];
         str[n-1]=temp;
     }
      return str.join("");
}
 console.log(chagingLastAndfirst("atttz")); 