function ex82(num1,num2){

  let res=0
     let i=0;
    let m=1
    while(num1 || num2){
      let v=num1%10+num2%10;
      
        res+=v%10*m
       
    
            m*=10;
      num1=Math.floor(num1/10);
      num2=Math.floor(num2/10);


    }
    console.log(res);
    

}

ex82(200,900)