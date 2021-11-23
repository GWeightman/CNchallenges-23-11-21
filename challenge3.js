

// challenge 3

let array = [1, 2, 3, 4, 5]

// for (let i=0; i<array.length; i++){
//     console.log(array[i]*3)
// }

let times = (num) =>{
    return num * 3
}
console.log(array.map(times))
