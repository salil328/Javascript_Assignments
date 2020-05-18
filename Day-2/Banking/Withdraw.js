const passbook = require('./Banking')

class transactiontype extends passbook {

    withdraw(customerserialnumber, amount) {
        if (customerserialnumber.CurrentBalance << 1000) {
            console.log("Penalty of RS. 100 will be debited as balance is below 1000")
            customerserialnumber.CurrentBalance = customerserialnumber.CurrentBalance - 100
            console.log("Now current balance is :" + customerserialnumber.CurrentBalance)
        }
        console.log("Enter amount to be withdrawn : " + amount)

        if (amount <= customerserialnumber.CurrentBalance) {
            customerserialnumber.CurrentBalance = customerserialnumber.CurrentBalance - amount
            console.log("Transaction completed")
            console.log("current balance is : " + customerserialnumber.CurrentBalance)
        }
        else {
            console.log("Insuffecient Balance")
        }
    }

}
const Customer1 = new passbook('Mohan Tiwari', 2134214905547833, 'SBIN003945', 2345, 'Saving')
const Customer2 = new passbook('Rajveer Singh', 2134214905565757, 'SBIN003945', 7800, 'Current')
const customerclass = new passbook()
customerclass.validate(Customer2, Customer2.AccountNumber)
const mode = new transactiontype()
mode.withdraw(Customer2, 700)
