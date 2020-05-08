const student =
{
    name : "Mike",
    rollnumber : 24,
    branch : "Electronics and Telecommunication",
    Aggregrate : 9.0
  }

const details = student

if(details === student){
    details.project = "IOT based appliances control system"
    //delete details.Aggregrate
}
console.log(student)
console.log(details)