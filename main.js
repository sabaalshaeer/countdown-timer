// the end of the year Date to countdown to
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime()
// console.log(countDownDate);

let counter = setInterval(() => {

    //  get Date Now
    let dateNow = new Date().getTime();

    // Find the Date Difference between Now and Countdown Date
    let dateDiff = countDownDate - dateNow;
    
    // get Time Units
    // console.log(days)


    // let hours = dateDiff % (1000 * 60 * 60 * 24); // the remain of millisecond to get the rest of hours 
    // console.log(hours); // milliseconds
    // console.log (hours / 1000 / 60 / 60);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))); // retutn only the hours
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / ( 1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60  ) / ( 1000 ));

    // console.log(minutes / 10000 / 60); 

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if ( dateDiff < 0) {
        clearInterval()
    }

}, 1000);
