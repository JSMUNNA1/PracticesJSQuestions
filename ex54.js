function checkVowel(str){
    let count =0;
     for(let i=0;i<str.length;i++){
         if('a'===str.charAt(i)||'e'===str.charAt(i)||'i'===str.charAt(i)||'o'===str.charAt(i)||'u'===str.charAt(i)||'A'===str.charAt(i)||'E'===str.charAt(i)||'O'===str.charAt(i)||'I'===str.charAt(i)||'U'===str.charAt(i)){
            count++;
         }
     }

     return count;
}

console.log(checkVowel("vvcd'gvfgfgviou"));
