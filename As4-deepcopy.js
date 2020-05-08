const student =
{
    name : "Mike",
    rollnumber : 24,
    branch : "Electronics and Telecommunication",
    Aggregrate : 9.0
  }

  
  const details = Object.assign({}, student);
  
  if(student != details){
    details.project = "IOT based appliances control system"
}
  console.log(student);
  console.log(details);