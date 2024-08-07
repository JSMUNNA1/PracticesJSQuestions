function checkNum(n){
    if(n%5==0&&n%7==0){
       return "yes";
    }
    return "no"
}

console.log(checkNum(35));
console.log(checkNum(30));
console.log(checkNum(42));
console.log(checkNum(3222));