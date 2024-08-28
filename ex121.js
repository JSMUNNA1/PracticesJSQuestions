function ex120(matrix){
         let fo=1;
         console.log(matrix.length);
         console.log(matrix[1].length);
         
         
        for(let i=0;i<matrix.length-1;i++){
          for(let j=fo;j<matrix[i].length;j++){
               
               if(matrix[i][j]!==0){
                   console.log(matrix[i][j]);
                   
               }
               
          }
          fo++;
        }

        return true;
}

const matrix=[ [1,0,0,0],
               [1,4,0,0],
               [4,6,2,0],
               [0,4,7,2] ]
 console.log(ex120(matrix));
               