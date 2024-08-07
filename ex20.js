function check(n1,n2){
    return !((n1>0 &&n2>0)||(n1<0&&n2<0));

}

console.log(check(10,-20));
console.log(check(-10,-20));
console.log(check(-10,20));
console.log(check(10,20));