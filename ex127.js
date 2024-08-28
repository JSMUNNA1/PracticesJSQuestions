function ex127(num){
        const binary=num.toString(2).split('');

          console.log(8-binary.length);
          let l=binary.length
         for(let i=0;i<8-l;i++){
            binary.unshift('0')
         } 
           console.log(binary);
           
            return parseInt(binary.reverse().join(''),2)
      }

      console.log(ex127(14));
      