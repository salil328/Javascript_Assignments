
const employee = {
    Name : 'Joe',
    ID : 23451,
    Designation: "Associate Software engineer",
    Company: "Mphasis",
    Empdetails : function(){
            return "My name is " + this.Name + " and ID is "+ this.ID
    },
    Emprole : function(){
        return " Working as a " + this.Designation + " in " + this.Company
    }
}
console.log(employee.Empdetails())
console.log(employee.Emprole())