function ex63(str){
      if(str.length>3){
         let mid=(str.length+1)/2;
        return str.slice(mid-2,mid+1);
      }
}


console.log(ex63("AvNCvewr"));
