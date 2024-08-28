// function ex146(num){
       
//    let res=0;
//      for(let i=1;i<=num;i++){
//          res+=Math.pow(i,3)
//      }

//      return res;
// }
// console.log(ex146(4));


// const obj={
//       name:"munna",
//       class:"EC1",
//       c:12
// }

// for(let i in obj){
//      console.log(i);
     
// }

// const o = null;

// console.log(`${o}`)


// const prototype1 = {nam:"mm"};

// const object1 = Object.create(prototype1);
// object1.class=",mmma"

// console.log(Object.getPrototypeOf(object1));
// console.log(object1.toString());


// const arr=[1,2,3,4,5];
// console.log(arr.fill(1,3,4));

function timeConversion(s) {
  // Write your code here
      let size=s.length;
      console.log(s.substring(size-2));
      
    if(s.substring(size-2)=="PM"){
         console.log(" ;  ");
         
          let num=+s.substring(0,2);
             num+=12+"";
            
                return num+s.substring(2)// console.log("m",num+s.substring(2));
    }
    let num=+s.substring(0,2);
    num=12-num;
    if(num>10){
                     
    }else if(num===0){
         num+="0"
    }else{
        num+="0"
    }
     num+="";
        return num+s.substring(2,size-2);
}

console.log(timeConversion("12:33:AM"));
