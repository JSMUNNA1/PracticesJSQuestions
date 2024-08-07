function fun(str){
    if(str.length<6){
      return str;
    }
if(str.substring(4,10)=='Script'){
    return str.substring(0,4)+str.substring(10,str.length)
}

}
console.log(fun('javaScriptoo'));
