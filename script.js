const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("second");

const birthday = "9 Mar 2022";

function countdown (){

    const newdate = new Date(birthday);
    const currentdate = new Date();


    const totalseconds = (newdate - currentdate)/1000;

    const seconds = Math.floor(totalseconds) %60;
    const minutes = Math.floor(totalseconds/60) %60;
    const hours = Math.floor(totalseconds/3600) %24;
    const days = Math.floor(totalseconds/3600/24);

    sec.innerHTML = timeformat(seconds);
    min.innerHTML = timeformat(minutes);
    hour.innerHTML = timeformat(hours);
    day.innerHTML = days;
};

function timeformat(time){
    return (time < 10 ? '0' : '') + time;
}

countdown();

setInterval(countdown,1000); 