function ex83(arr){
     let max=''
    arr.forEach((element) => {
         if(element.length>max.length)max=element;
    });

    return max;
}

console.log(ex83(['aa','aaaaaaa','fssss','dfgfdrtf']));
