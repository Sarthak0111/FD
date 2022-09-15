// It Only works in Mocrosoft Edge
const posts = [
    {id: 1, title: "Post One", body: "Post One Body"},
    {id: 2, title: "Post Two", body: "Post Two Body"},
    {id: 3, title: "Post Three", body: "Post Three Body"}
]

//console.log(posts);

const getPosts = function() {
    setTimeout( function() {
        for (let i = 0; i<posts.length;i++){
            console.log(posts[i].body)
        }
    },2000)
}

const createPosts = function(post) {
    setTimeout( function() {
        posts.push(post)
    },3000)
}

createPosts({id: 4, title: "Post Four",body: "Post Four Body"})
getPosts()






