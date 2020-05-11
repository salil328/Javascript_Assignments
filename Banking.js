class Customer{

constructor (Name,AccountNumber,IFSC,CurrentBalance,AccountType){

    this.Name = Name
    this.AccountNumber=AccountNumber
    this.IFSC=IFSC
    this.CurrentBalance= CurrentBalance
    this.AccountType = AccountType
}
}
const Customer1 = new Customer('Mohan Tiwari',2134214905547833,'SBIN003945',2345,'Saving')
const Customer2 = new Customer('Rajveer Singh',2134214905565757,'SBIN003945',800,'Current')

const validate = (object,key)=>{
   if(typeof key==="number") {
        console.log("Welcome" + " "+ object.Name) 
        console.log("Account number :" + object.AccountNumber)
        console.log("IFSC :" + object.IFSC)
        console.log("Account type :" + object.AccountType)
        console.log("Your Current Balance is : " + object.CurrentBalance)
    }
     else {
         console.log('Account is invalid !')
}

}
validate(Customer2,Customer2.AccountNumber)

var Withdraw = (object,amount)=>{

if(object.CurrentBalance << 1000)
{
    console.log("Penalty of RS. 100 will be debited as balance is below 1000")
    object.CurrentBalance = object.CurrentBalance -100
    console.log("Now current balance is :" + object.CurrentBalance)  
}
    console.log("Enter amount to be withdrawn : " + amount)

if(amount<=object.CurrentBalance){
    object.CurrentBalance = object.CurrentBalance - amount
    console.log("Transaction completed")
    console.log("current balance is : " + object.CurrentBalance)
}
else{
    console.log("Insuffecient Balance")
}
}

var Deposit = (object,amount)=>{
if(object.CurrentBalance <= 1000)
{
    console.log("Penalty of RS. 100 will be debited")
    object.CurrentBalance = object.CurrentBalance -100
    console.log("Now current balance is :" + object.CurrentBalance)  
}
console.log("Enter amount to be deposited : " + amount)
object.CurrentBalance = object.CurrentBalance + amount
console.log("Transaction completed")
console.log("Now your Current balance is :" +  object.CurrentBalance)
}

//Deposit(Customer2,2000)
Withdraw(Customer2,700)
