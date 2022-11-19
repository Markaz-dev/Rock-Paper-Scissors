let comp = document.querySelector("#comp")
let you = document.querySelector("#you")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let youchoose = document.querySelector("#youchoose")
let compchoose = document.querySelector("#compchoose")
let btn = document.querySelector(".btn")

rock.addEventListener('click', function () {
    youchoose.innerHTML = 'Rock'
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random() * things.length)]
    compchoose.innerHTML = thing
})
btn.addEventListener('click', function (name) {
    if (youchoose == rock & compchoose == rock) {
        console.log("Equal");
    }
})






// paper.addEventListener('click', function () {
//     youchoose.innerHTML = 'Paper'
//     var things = ['Rock', 'Paper', 'Scissor'];
//     var thing = things[Math.floor(Math.random() * things.length)]
//     compchoose.innerHTML = thing
// })

// scissors.addEventListener('click', function () {
//     youchoose.innerHTML = 'Scissors'
//     var things = ['Rock', 'Paper', 'Scissor'];
//     var thing = things[Math.floor(Math.random() * things.length)]
//     compchoose.innerHTML = thing
// })


