const employee = {
    Name : 'Joe',
    ID : 23451,
    Designation: "Associate Software engineer",
    Company: "Mphasis"
}

function extract(){
    if(employee.hasOwnProperty('ID'))
    {
        return employee.ID
    }
    else {
        return null
    }
}
console.log(extract());