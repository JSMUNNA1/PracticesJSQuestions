today=new Date();
var cmasday=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmasday.setFullYear(cmasday.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmasday.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");