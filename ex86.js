function ex86(angle){

     if(angle<90 && angle>=0){
      console.log("Acute angle");
      
     }else if(angle>90 &&angle<180){
      console.log("Obtuse angle");
     }else if(angle===180){
      console.log("Straight angle");
     }else if(angle===90){
      console.log("Right angle");      
     }
}

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle

;
ex86(99)