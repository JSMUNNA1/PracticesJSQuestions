
function LetterChanges(text) {
  // Initialize an array by splitting the input text into individual characters
   
       let str=[];   

    for (var i = 0; i < text.length; i++) {
      
          if(text.charAt(i)==='z'){
              str[i]='a'
          }else if(text.charAt(i)==='Z'){
            str[i]='A'
        }else if(text.charAt(i)==' '){

        }else {
          str[i]=String.fromCharCode(text.charCodeAt(i)+1);
        }

      
  }

  
  return str.join('');
}

console.log(LetterChanges("A%BCD"))