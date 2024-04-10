let seconds = 57;
let minutes = 0;

let chrono = setInterval(function(){
    if (seconds < 59){
        seconds++;
        console.log(seconds);
    } else {
        seconds = 0;
        minutes++;
    }
    printer(seconds, minutes)
}, 1000)


