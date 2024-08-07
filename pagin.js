// function* paginateArray(array, pageSize) {
//   for (let i = 0; i < array.length; i += pageSize) {
      
//     let array2=array.slice(i, i + pageSize);
//       console.log(array2)
//     yield array2;
//   }
// }
// const largeDataset = Array.from(
//   { length: 100 },
//   (_, i) => `Item ${i + 1}`
// );
// const pageSize = 10;
// const paginator = paginateArray(largeDataset, pageSize);
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
// paginator.next();
                 
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const gen = g5();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(gen.next());