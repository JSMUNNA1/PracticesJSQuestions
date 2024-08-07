function close100(x,y){
      if(x>100 ){
        x=x-100
        
      }else{
        x=100-x;
      }
        
      if(y>100 ){
        y=y-100
        
      }else{
        y=100-y;
      }
      if(x<y){
        return "x is close ";
      }else{
        return "y is close";
      }
}

console.log(close100(80,111));
