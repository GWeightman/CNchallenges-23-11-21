// challenge 2
let total = 0
        
let sum = (num1, num2) => {
    return num1 + num2
}

let whole = (num1, num2, fn) => {
    for (let i=0; i<5; i++){
        total = total + fn(num1, num2)
        console.log(total)
    }
}
    

whole(6, 4, sum)

