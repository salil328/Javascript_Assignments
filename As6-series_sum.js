
const sum = (a)=> (b)=> {
        if(b){
        return sum(a+b)
    }
    return a
    }
console.log(sum(8)(3)(4)(5)())
