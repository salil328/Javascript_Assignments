class Customer {

    constructor(Name, AccountNumber, IFSC, CurrentBalance, AccountType) {

        this.Name = Name
        this.AccountNumber = AccountNumber
        this.IFSC = IFSC
        this.CurrentBalance = CurrentBalance
        this.AccountType = AccountType
    }
    validate(customerserialnumber, detail){
        if (typeof detail === "number") {
            console.log("Welcome" + " " + customerserialnumber.Name)
            console.log("Account number :" + customerserialnumber.AccountNumber)
            console.log("IFSC :" + customerserialnumber.IFSC)
            console.log("Account type :" + customerserialnumber.AccountType)
            console.log("Your Current Balance is : " + customerserialnumber.CurrentBalance)
        }
        else {
            console.log('Account is invalid !')
        }
    }
}
module.exports = Customer
