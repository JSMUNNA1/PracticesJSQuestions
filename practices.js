// // function* generators(i){
   
// //     while(i<=5){
// //       yield i++;
// //     }
   
      
  
// // }
// // const iterator=generators(1);
// // let result=iterator.next(); 
// // console.log(result.done); // prints 2
// // while(!result.done){
// //   console.log(result.value);
// //    result=iterator.next();
  

// // }
// // // console.log(result.done);
// // function* abcs(){
// //      yield 'a';
// //      yield 'b';
// //      yield 'c';
// // }
// // for(let letter of abcs()){
// //     console.log(letter.toUpperCase())
// // } 
// //   console.log( [...abcs()]);
// let obj = {
//   a: "1",
//   b: "2",
//   c: "3",
//   [Symbol.iterator]() {
//     let keys = Object.keys(this);
//     console.log(keys,"keysObj");
//     let index = 0;
//     return {
//       next: () => {
//         if (index < keys.length) {
//             const key=keys[index++]
//          // return { value: { value: key, data: this[key] }, done: false };
//          return {value:this[key],done:false}
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };
// for (const i of obj) {
//   console.log(i);
// }



// const obj={
//        a:'1',
//        b:'2',
//        c:'3',
//        [Symbol.iterator](){
//          let keys=Object.keys(this);
//          let index=0; 
//          return{
//             next:()=>{
//                if(index<keys.length){
//                 const key=keys[index++];
//                 return {value:this[key],done:false}
//                }else{
//                  return{done:true}
//                }
//             }
//          } 

//        }
// }
// for(let i of obj){
//    console.log(i)
// }
const obj={
     suits:['*','!','#','$'],
     court:['J','Q','K','A'],
      [Symbol.iterator]:function*(params) {
              for(let suit of this.suits){
                for(let i=2;i<=10;i++)yield suit+i;
                for(let c of this.court)yield suit+c;
              }
          
      }


      
}
console.log(obj);
for(let i of obj){
  console.log(i)
}


function com(a,b){
    return b-a;
}
let arr=[2,1,4,3];
let sortedArr=arr.sort(com);
console.log(sortedArr);


arr.splice(1,0,"e");
console.log('====================================');
console.log(arr);
console.log('====================================');