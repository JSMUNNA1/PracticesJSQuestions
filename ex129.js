function ex129(num){
        
           while(num>=3){
            num++;
                for(let i=2;i<=num;i++){
                     if(num>i&&num%i===0){
                          break;
                     }
                      if(i===num){
                      return num;
                     }
                }
                
                
           }
   
          
}


console.log('hello',ex129(3));
