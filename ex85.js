function ex85(arr){
      let part1=0;
      let part2=0;

      for(let i=0;i<arr.length;i++){
           if(i%2===0){
            part1+=arr[i];
           }else{
              part2+=arr[i];
           }
      }

      return [part1,part2]
}

console.log(ex85([1,2,3,4,5,6]));
