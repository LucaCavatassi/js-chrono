// DOM ELEM
const minutesDom = document.querySelector(".minutes")
console.log(minutesDom);
const secondsDom = document.querySelector(".seconds")
console.log(secondsDom);

let seconds = 0;
let minutes = 0;

let secondCounter = setInterval(function(){
    seconds++
    console.log(seconds);
}, 1000)

clearInterval(secondCounter)