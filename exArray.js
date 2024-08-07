// let arr=[1,2,
//   {
//    1:'1',
//    2:'2'
// },3,4];

//   let arr2=[];
   
//   for(let i=0;i<arr.length;i++){
//      if(typeof arr[i]==='object'){
      
//         arr2[i]=JSON.parse(JSON.stringify((arr[i])));
//      }else{
//        arr2[i]=arr[i];
//      }
//   }
//       arr2[2][1]=10;
//   console.log(arr2)
//   console.log(arr)
  //===============================================================================2===========================
// const arrayLike = { length: 3, 0: 1, 1: 2, 2: 3 };
// const context = {
//   multiplier: 10
// };

// const array = Array.from(
//   arrayLike,
//   function (element) {
//     return element * this.multiplier;
//   },
//   context
// );

// console.log(array); // [10, 20, 30]
///===============================================3
// //call(),apply(),bind()
//  function print(){
//   console.log(this.name,this.age)
//  }
// let obj={
//      name:'munna',
//      age:20,
    
// }
// let obj2={
//        name:'sivam',
//        age:21,

// }
//    print.call(obj2)
//    printt=print.bind(obj);
//    console.log(printt());
//===================== ArrayOf()==4
const arr=Array.of('')
console.log(arr) // ['']


 