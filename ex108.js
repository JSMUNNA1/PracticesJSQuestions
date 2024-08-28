function ex108(vector1,vector2){
       let minLength=Math.min(vector1.length,vector2.length)
      let sum=0;
      for(let i=0;i<minLength;i++){
           sum+=vector1[i]*vector2[i]
        
      }

      return sum;
     
}

console.log(ex108([1,2,3,4,5],[1,2,3,4,5,6]));
