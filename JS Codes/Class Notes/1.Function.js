//Function in 3S

//Adding The Numbers
// function functionName(parameters) { ...body }
function sum(a, b){
    return a + b
}
function add(a, b){
    if(typeof a == 'number' && typeof b == 'number'){
        return a + b
    }
    else{
        return "NOT POSSIBLE"
    }
}

function minus(a, b){
    return a - b
}

function divide(a, b){
    return a/b
}

const result1 = sum(100, 200)
const result2 = add('String one', 'String Two')
const result3 = sum(200, true)
const result4 = minus('String one', 'String Two')
const result5 = divide(true, false)
const result6 = add(-5, 6)


console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)