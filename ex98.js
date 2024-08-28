function ex98(str){
    let x=0;
    let y=0;
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
          x++;
        }else{
          y++;
        }
    }

    if(x>y){
       return str.toUpperCase();
    }else{
        return str.toLowerCase();
    }
}

console.log(ex98("ABii"));

