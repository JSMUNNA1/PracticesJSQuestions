function ex135(str){
  //   let res=[]
  //  let map=new Map()
  //     for(let i=0;i<str.length;i++){
  //          if(map.has(str.charAt(i))){
  //                map.set(str.charAt(i), map.get(str.charAt(i))+1) 
  //          } else{
  //              map.set(str.charAt(i),1)
  //          }
  //     }  
  //      let iterator=map.entries();
  //       let val=iterator.next();
  //        while(!val.done){
  //              if(val.value[1]===1){
  //                  res.push(val.value[0])
  //              }
  //              val=iterator.next();
  //        }

  //        return res.join("");

        //2nd Way

        let vers=str.split("");
        let res=[]
          for(let i=0;i<vers.length;i++){
                 if(vers.indexOf(vers[i])===vers.lastIndexOf(vers[i])) res.push(vers[i])
          }
        return res.join("")
}

console.log(ex135("aabsbsad"));
