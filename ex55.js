function ex55(str){
     let countP=0;
     let countT=0;
     for (let i = 0; i < str.length; i++) {
          if(str[i]==='p'){
            countP++;
          }
          if(str[i]==='t'){
            countT++;
          }
     }
     return countP===countT;
}

console.log(ex55("seppsstt"));
