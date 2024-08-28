function ex65(str){
      if(str.length>=6){
         if(str.slice(-6)==='Script'){
          return true;
         }
      }
      return false;
}

console.log(ex65("JavaScript"));
console.log(ex65("Script"));
console.log(ex65("wwScriptc"));
