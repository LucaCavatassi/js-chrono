// DOM
const secondsDom = document.querySelector(".seconds");
const minutesDom = document.querySelector(".minutes");

// GLOBAL VAR
let seconds = 0;
let minutes = 0;
let chrono;

// ALLBUTTONS
let buttonsNode = document.querySelectorAll(".button");
console.log(buttonsNode);

// STARTING PRINT
secondsDom.innerHTML = ("00");
minutesDom.innerHTML = ("00");

// START
buttonsNode[0].addEventListener ("click",function(){

    // CHRONOMETER
    chrono = setInterval(function(){
        if (seconds < 59){
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }

        // PRINT
        printer(seconds, minutes)
    }, 1000)

    console.log("START");
})
// STOP
buttonsNode[1].addEventListener ("click",function(){
    // STOP CHRONO
    clearInterval(chrono);
    console.log(`STOP AT ${seconds} SECONDS AND ${minutes} MINUTES`);
})
// RESET
buttonsNode[2].addEventListener ("click",function(){
    // RESET SECONDS
    seconds = 0;
    // RESET PRINT
    secondsDom.innerHTML = ("00");
    // RESET MINUTES
    minutes = 0;
    // RESET PRINT
    minutesDom.innerHTML = ("00");
    console.log("RESET");
})


// IL CRONOMETRO DEL MIO IPHONE ALLO STOP SI FERMA MA NON SI AZZERA QUINDI L'HO LASCIATO COSì COM'è ALTRIMENTI AVREI MESSO IL RESET ANCHE A START