function captialFirLet(str){
      let u=str.split(" ");
      console.log(u);
       for(let i=0;i<u.length;i++){
          if(u[i]===''){
            u.splice(i,1)
          }
       } 
       console.log(u);
    let resArr=[]
      for(let i=0;i<u.length;i++){
           let res=''
          let first=u[i].charAt(0).toUpperCase(); 
          res= first+u[i].slice(1);
          resArr.push(res)

      }
      
    return resArr.join(" ");
}
console.log(captialFirLet("my name is  munna"))
