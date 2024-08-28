function ex130(num){
           let evenCount=0;
            while(num){
                 if((num%10)%2===0){
                     evenCount++;
                 }
                 num=Math.floor(num/10)
            }
            return evenCount;
}

console.log(ex130(1020));
