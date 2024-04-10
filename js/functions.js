function printer (s, m){
    const secondsDom = document.querySelector(".seconds");
    const minutesDom = document.querySelector(".minutes");
    
    if (s < 10) {
        s = "0" + s.toString();
    } 
    if (m < 10) {
        m = "0" + m.toString();
    }

    secondsDom.innerHTML = s;
    minutesDom.innerHTML = m;
}