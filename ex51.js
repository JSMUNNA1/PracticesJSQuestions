function minute(mintes){
        let hours=Math.floor(mintes/60);
        let minu=mintes%60;
         return `time taken ${hours}:${minu}hours`  
   
}
console.log(minute(333));


