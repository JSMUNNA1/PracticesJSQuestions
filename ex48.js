function revStr(str){
  let res='';
    for(let i=0;i<str.length;i++){
         res=str.charAt(i)+res;
    }

    return res;
}

console.log(revStr("dae"));
