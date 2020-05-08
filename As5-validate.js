var amount = 2000
var quantity = 5
const deposit =()=>{
if (typeof amount === "number" && typeof quantity === "number"){

const totalamount = amount*quantity
console.log("Total amount deposited :"+ totalamount)
}
else {
    return "Type not matched"
}
}
deposit()