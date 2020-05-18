const passbook = require('./Banking')

class transactiontype extends passbook {

    deposit(customerserialnumber, amount) {
        if (customerserialnumber.CurrentBalance << 1000) {
            console.log("Penalty of RS. 100 will be debited")
            customerserialnumber.CurrentBalance = customerserialnumber.CurrentBalance - 100
            console.log("Now current balance is :" + customerserialnumber.CurrentBalance)
        }
        console.log("Enter amount to be deposited : " + amount)
        customerserialnumber.CurrentBalance = customerserialnumber.CurrentBalance + amount
        console.log("Transaction completed")
        console.log("Now your Current balance is :" + customerserialnumber.CurrentBalance)
    }

}
const Customer1 = new passbook('Mohan Tiwari', 2134214905547833, 'SBIN003945', 2345, 'Saving')
const Customer2 = new passbook('Rajveer Singh', 2134214905565757, 'SBIN003945', 7800, 'Current')
const customerclass = new passbook()
customerclass.validate(Customer1, Customer1.AccountNumber)
const mode = new transactiontype()
mode.deposit(Customer1, 700)
