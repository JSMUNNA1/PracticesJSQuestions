function ex114(num){
     let first=num.charAt(0);
     let lastNum=num.charAt(num.length-1);

     return /[A-Z]/.test(first)&&/[.]/.test(lastNum);
    
}

console.log(ex114('My name is Game.'));
console.log('My name is Game.');
console.log(ex114('My name is Game'));

