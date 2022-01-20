const loaded = document.querySelector("#counter");

loaded.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
});

// setInterval(function timer(){
//     let i = 0;
//     i++;
//     document.getElementById("show") = i;
//     if(i > 30){
//       i = 0;
//     }
//   },1000);

// timer()


function startCounter() {
    
    loaded.innerHTML = 0
        if(loaded.value < 100) {
           return loaded.value++
        }

    const stopCounter = document.getElementById('pause');
    stopCounter.addEventListener('click', (event) => {
        console.log(event)
    })

    const heart = document.getElementById('heart')
    heart.addEventListener('click', (e) => {
        const likes = document.querySelector('.likes');
        const newLikes = document.createElement('li');
        newLikes.innerText = `new like for number ${loaded.textContent} `
        likes.append(newLikes)
        console.log(e, newLikes.innerText)
    })
}
startCounter()

function restart() {
    const restartBtn = document.getElementById('restart')
    restartBtn.addEventListener('click', e=>{
        loaded.innerHTML = 0
        console.log('restarted the counter', e)
    })
}
restart()

// let counterValue = parseInt(.value)

function counterUp() {
    const add = document.getElementById('plus');
    add.addEventListener('click', (event) => {
        // let currentN = parseInt(loaded.value)
        loaded.textContent = parseInt(loaded.textContent) + 1
        console.log(event, loaded)
    })
}
counterUp()

function counterDown() {
    const add = document.getElementById('minus');
    add.addEventListener('click', (event) => {
        loaded.textContent = parseInt(loaded.textContent) - 1
        console.log(event, loaded)
    })
}
counterDown()


function addComment() {
    const formInput = document.getElementById('comment-form');
    formInput.addEventListener('submit', event => {
        event.preventDefault();
        console.log(event, "🤷‍♂️");
        const newComment = document.getElementById('list');
        const listComment = document.createElement('li');
        const renderComment = document.getElementById('comment-input');
        listComment.innerText = renderComment.value;
        newComment.appendChild(listComment)
    })
}
addComment()

// A "like" button (❤️) that adds a "like" for the number that is currently displayed by the time
// function addHearts() {
//     const heart = document.getElementById('heart')
//     heart.addEventListener('click', (e) => {
//         console.log(e)
//         const likes = document.querySelector('.likes');
//         const newLikes = document.createElement('li');
//         newLikes.innerText = `new like for number `
//         likes.append(newLikes)
//     })
// }
// addHearts()

