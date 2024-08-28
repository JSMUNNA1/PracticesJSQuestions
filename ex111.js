function ex111(x,y,z){
      
   if(x!==y&&y!==z&&z!==x){
    return "three numbers are not Equals";
   }

   if(x===y){
    return z;
   }
   if(x===z){
    return y;
   }
   if(y==z){
    return x;
   }
   
}
console.log(ex111(1,3,3));
console.log(ex111(1,5,3));
