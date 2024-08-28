function ex144(str){
  var data = str.split("://");
  var protocol = data[0];
  
  data = data[1].split(".com");
  var domain = data[0];
  
 
  data = data[1].split("/");

 
  if (data[1]) {
      return [protocol, domain, data[1]];
  }
          return[protocol,domain]
}

console.log(ex144('https://www.resource.com/eefff'));
