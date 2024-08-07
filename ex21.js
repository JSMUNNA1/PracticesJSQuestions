function startBy(s){
     let p=s.slice(0,2);
      
    
     if(p=='Py'){
      return s;
     }else{
        s ='Py'+s;
        return s;
     }
}

console.log(startBy("Py"))
console.log(startBy("dedd"))