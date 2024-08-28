function check(num1,num2){
    let res=num1/num2;
    let formaRes= res.toLocaleString(undefined, {maximumFractionDigits: 2});

    return formaRes;
}

console.log(check(10000,5));
