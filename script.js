const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

setInterval(appClock, 1000);

function appClock() {
    let date = new Date();
    let getSec = date.getSeconds() / 60;
    let getMinc = (date.getMinutes() + getSec) / 60;
    let getHour = (date.getHours() + getMinc) / 12;

    sec.style.transform = "rotate(" + (getSec * 360) + "deg)";
    min.style.transform = "rotate(" + (getMinc * 360) + "deg)";
    hour.style.transform = "rotate(" + (getHour * 360) + "deg)";
}
appClock();