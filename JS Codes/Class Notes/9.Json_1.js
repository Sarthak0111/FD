// Step-1  Create an object of XMR
const xhr = new XMLHttpRequest()
const source = 'https://api.github.com/users'
console.log(`Ready State Log - 1 = ${xhr.readyState}`);


// Step-2  Open the porta; of communicatiobn b/w client and the server
xhr.open('GET', source, false)
console.log(`Ready State Log - 2 = ${xhr.readyState}`);


// Step -3 Perform your function on radyState is in transition
// xhr.onreadystatechange = function(){
//     console.log(`Ready State Log - 3 = ${xhr.readyState}`);
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const response = JSON.parse(xhr.responseText)
//         console.log(response)
//     }
// }


xhr.onreadystatechange = function () {
    console.log(`Ready State Log - 3 = ${xhr.readyState}`);
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        let output = ''
        for (let i = 0; i < response.length; i++) {
            output += `<img src="${response[i].avatar_url}">`  // if u write response[0] instead of response[i] it will show single picture multiple times 
        }
        document.querySelector('#container').innerHTML = output;
    }
}

// Step -4 Send The Request
xhr.send()