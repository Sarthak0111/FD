// Objects

// 1. Objects Constructors

// const myObject = new Object()

// myObject.name = 'User One'
// myObject.email = 'UserOne@gmail.com'
// myObject.age = 23
// console.log(myObject)


// Arrays

// 2. Use {}

const students = [
    {
    //key: value
    RollNo: 0010,
    name: "Student One",    
    age: 10,
    percentage: "82%",
    hobbies: ["code", "parties", "Listening Music"],
    address:{
        state: 'Punjab',
        City: 'Samana',
        Area: 'Indrapuri'
    }
},
{
    RollNo: 0011,
    name: "Student Two",    
    age: 10,
    percentage: "89%",
    hobbies: ["coding", "Listening Music"],
    address:{
        state: 'Punjab',
        City: 'Samana',
        Area: 'Indrapuri'
    }
},
{
    RollNo: 0012,
    name: "Student three",    
    age: 10,
    percentage: "95%",
    hobbies: ['coding', 'Cricket', 'Listening Music', 'Novel Reading'],
    address:{
        state: 'Punjab',
        City: 'Samana',
        Area: 'Indrapuri'
    }
}
]
console.log(students);

console.log(students[2].age);

console.log(students[2].hobbies[1]);