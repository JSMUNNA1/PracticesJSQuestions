function findGrade(totalScore,lable){

  if(lable==='Final-exam'){
      return totalScore>=90 && totalScore<=100;
  }
  return 89<=totalScore && 100>=totalScore;

}

console.log(findGrade(89,'Final-exam'));
console.log(findGrade(90,'Final-exam'));
