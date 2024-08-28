function ex99(str1,str2){
     let sarray1=str1.split('');
     let sarray2=str2.split('');

    str1=  sarray1.sort().join('');
    str2=   sarray2.sort().join('');

  if(str1===str2){
    return true;
  }
  return false;
     
}

console.log(ex99("XYZ","ZXY"));
console.log(ex99("XYZ","ZXYw"));
