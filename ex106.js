function ex106(num,d){
      if(d===1)return num;

      while(num%d===0){
          num/=d
      }

      return num;
}

console.log(ex106(114,2));
