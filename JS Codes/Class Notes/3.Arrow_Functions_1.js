// Consitional Statements

const val1 = 22
const val2 = 22

if (val1 === val2){
    console.log('They are Same')
}
else{
    console.log('They are Not Same')
}


// Arrow Functions (=>)

// Voting Systems
// M -> >= 21
// F -> >= 18
const votingSystems = (gender, age) => {
    if(gender === 'M' && age >=21){
        console.log("You Can Vote")
    }
    else if(gender === 'M' && age<=20){
        console.log("You Cannot Vote");
    }
    else if(gender === 'F' && age >=18){
        console.log("You Can Vote")
    }
    else{
        console.log("You Cannot Vote")
    }
}

const add = (a, b) => (a+b)
const sub = (a, b) => a-b

votingSystems('M', 18)
votingSystems('F', 19)

// Arrays

const arr1 = [100, 200, 300, 400, 500]
const arr2 = [ ...arr1 ]

console.log(arr1)
arr2.pop()
console.log(arr2)