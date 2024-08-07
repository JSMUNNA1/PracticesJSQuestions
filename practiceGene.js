// const invitees = ['John Doe', 'Jane Smith', 'Sam Johnson', 'Alice Brown', 'Bob White'];

// // Create the formatted list of names
// const formattedNames = invitees.map(name => name).join('');

// console.log('====================================');
// console.log(formattedNames);
// console.log('====================================');
// function multiply(multiplier, ...theArgs) {
//      console.log(multiplier)
//      console.log(theArgs)
//   return theArgs.map((element) => multiplier * element);
// }

// const arr = multiply(2, 15, 25, 42);
// console.log(arr); // [30, 50, 84]

// Simulate fetching data from an API in chunks
// function* fetchDataInChunks(data, chunkSize) {
//   for (let i = 0; i < data.length; i += chunkSize) {
//     yield data.slice(i, i + chunkSize);
//   }
// }

// // Sample data (e.g., a large dataset)
// const largeDataset = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

// // Create an instance of the generator with a chunk size of 10
// const dataChunks = fetchDataInChunks(largeDataset, 10);

// // Process the data in chunks
// for (let chunk of dataChunks) {
//   console.log('Processing chunk:', chunk);
//   // Process each chunk (e.g., display in UI, perform calculations)
// }

function* yyy(){
    let i=0
    let arr=[1,2,3,4]
   yield* arr;
}
   let it=yyy()
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
      