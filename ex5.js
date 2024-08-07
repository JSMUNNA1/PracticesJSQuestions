let date=new Date();
var year=date.getFullYear();
let leep= (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(leep);


