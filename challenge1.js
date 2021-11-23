// challenge 1
let repeat = () => {
    console.log("hello code nation")
}

let hello = (num, fn) => {
    for (let i=0; i<num; i++){
        fn()
    }

}

hello(5, repeat)
