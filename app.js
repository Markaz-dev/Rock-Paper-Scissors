let comp = document.querySelector("#comp")
let you = document.querySelector("#you")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let youchoose = document.querySelector("#youchoose")
let compchoose = document.querySelector("#compchoose")
let btn = document.querySelector(".btn")

rock.addEventListener('click', function (name) {
    youchoose.innerHTML = 'Rock'
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random() * things.length)]
    compchoose.innerHTML = thing
})
paper.addEventListener('click', function (name) {
    youchoose.innerHTML = 'Paper'
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random() * things.length)]
    compchoose.innerHTML = thing
})
scissors.addEventListener('click', function (name) {
    youchoose.innerHTML = 'Scissors'
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random() * things.length)]
    compchoose.innerHTML = thing
})

btn.addEventListener('click', function (name) {
    if (youchoose == rock & compchoose == paper) {
        console.log("You lose!!");
    }else if(youchoose == rock & compchoose == scissors){
        console.log("You win!!");
    }else{
        console.log("Equal");
    }
})

// btn.addEventListener('click', function (name) {
//     if (youchoose == paper & compchoose == scissors) {
//         console.log("You lose!!");
//     }else if(youchoose == paper & compchoose == paper){
//         console.log("Equal");
//     }else{
//         console.log("You win!!");
//     }
// })

// btn.addEventListener('click', function (name) {
//     if (youchoose == rock & compchoose == scissors) {
//         console.log("You win!!");
//     }else if(youchoose == rock & compchoose == paper){
//         console.log("you lose!!");
//     }
// })