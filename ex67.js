function ex67(str){
     let s=0;
     let e=str.length;
     if(str.length>0&&str.charAt(s)==='P'){
      s++;
      console.log(s);
      
     }
     if(str.length>0&&str.charAt(e-1)==='P'){
        e--;
        console.log(e);
        
     }

     return str.slice(s,e);
}

console.log(ex67('PythonP'));
console.log(ex67('Poppat'));
console.log(ex67('JavASCript'));
