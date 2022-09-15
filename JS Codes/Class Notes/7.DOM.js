// create HTML

// const myImg = document.createElement('img')
// myImg.setAttribute('src', 'https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg')
// console.log(myImg)



// // This code can be used with code written just below
// const myDiv = document.createElement('div')
// myDiv.setAttribute('id', 'my-div-id')
// myDiv.setAttribute('class', 'my-div-class')
// myDiv.textContent = 'This is my DIV'


// // // Append this div to the UI (HTML)
// document.querySelector('#some-div').appendChild(myDiv)

// console.log(myDiv)



// // Access the text value of the input when the button is clicked
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const textValue = document.getElementById('text-input').value
    
//     // create a li and add the textValue as textContent
    const li = document.createElement('li')
    li.textContent = textValue
    li.setAttribute('class', 'list-group-item')

//     // Add the li to the ul
    document.getElementById('items').appendChild(li)
})