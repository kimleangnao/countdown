let jsDayC1 = document.querySelector(".js--countdown--day--c1");
let jsDayC2 = document.querySelector(".js--countdown--day--c2");

let jsHourC1 = document.querySelector(".js--countdown--hour--c1");
let jsHourC2 = document.querySelector(".js--countdown--hour--c2");

let jsMinuteC1 = document.querySelector(".js--countdown--minute--c1");
let jsMinuteC2 = document.querySelector(".js--countdown--minute--c2");

let jsSecondC1 = document.querySelector(".js--countdown--second--c1");
let jsSecondC2 = document.querySelector(".js--countdown--second--c2");

let onButton = document.querySelector("#on");
let offButton = document.querySelector("#off");
let videoVideo = document.querySelector(".video--video");


onButton.addEventListener('click', function(e){
    e.preventDefault()
    videoVideo.play();
})

offButton.addEventListener('click', function(e){
    e.preventDefault()
    videoVideo.pause();
})

let updateInterval = setInterval(function updateTimeIntervalFunction(){

    let endDate = new Date('July 30, 2020 23:59:59')
    let start = Date.now()
    
    /*https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript*/
    let convertTime = function convertMs(ms){
        let seconds = (ms / 1000).toFixed(0);
        let minutes = Math.floor(seconds / 60);
        let hours = "";
        let days = "";
        if (minutes > 59){
            hours = Math.floor(minutes / 60);
            if(hours > 23){
                days = Math.floor(hours / 24)
                days = (days >= 10) ? days : "0" + days;
                hours = hours - (days * 24);
                hours = (hours >= 10) ? hours : "0" + hours;
            }
            minutes = Math.floor(minutes % 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }
    
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return [days, hours, minutes, seconds];
    }
    
    let resultDate = convertTime(endDate.getTime() - start);
    let [day, hour, minute, second] = resultDate;
    let daySplit = day.toString().split("");
    let hourSplit = hour.toString().split("");
    let minuteSplit = minute.toString().split("");
    let secondSplit = second.toString().split("");
    jsDayC1.textContent = daySplit[0];
    jsDayC2.textContent = daySplit[1];

    jsHourC1.textContent = hourSplit[0];
    jsHourC2.textContent = hourSplit[1];    

    jsMinuteC1.textContent = minuteSplit[0];
    jsMinuteC2.textContent = minuteSplit[1];

    jsSecondC1.textContent = secondSplit[0];
    jsSecondC2.textContent = secondSplit[1];
},1000)



