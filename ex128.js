// function ex128(val1,val2,targ){
//              let val12=Infinity
//              let val22=Infinity
//        if(val1>targ ){
//              val12=val1-targ;
//        }if(val2>targ ){
//               val22=val2-targ;
//        }
//         console.log(val12,val22);
        
//       if(val12>val22){
//           return val2;
//       }
//       if(val22>val12){
//         return val1;
//       }
// }

// console.log(ex128(70,65,60));



function realex128(num){
          while(num%10){
               num++;
          }

          return num;
}

console.log(realex128(123));
















