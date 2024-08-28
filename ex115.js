function ex115(matrix){
     for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix[i].length;j++){
           if(i===j && matrix[i][j]!==0){
                 return false;
           }else if(matrix[i][j]!==0){
                  return false; 
           }
          }
             
     } 

     return true;
}
console.log(ex115([[1,0,0],[0,1,0],[1,0,1]]))
