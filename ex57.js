function ex57(str,copy){
    if (copy<0){
        return false;
    }else{
       return str.repeat(copy);
    }
}

console.log(ex57("abc",5));
