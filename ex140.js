function ex140(num){
       let res=num%10;
      while(num){
        if(num%10!==res)return false;
        num=Math.floor(num/10);

      }

     

       return true;
}

console.log(ex140(111311));
