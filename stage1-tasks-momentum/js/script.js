const time = document.querySelector('.time');

setInterval(function() {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();
        day = currentTime.getDay()
        if(hours < 10) {
            hours = "0" + hours
        }
        if(minutes < 10) {
            minutes = "0" + minutes
        }
        if(seconds < 10) {
            seconds = "0" + seconds
        }
        if(day < 10) {
            day = "0" + day
        }
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000)

const date = document.querySelector('.date')
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
setInterval(function(){
    let weekDay = new Date(),
    day = weekDay.getDay(),
    dayToday = weekDay.getDate();
    if(dayToday == 1){
        dayToday = daysOfWeek[0]
    }
    if(dayToday == 2){
        dayToday = daysOfWeek[1]
    }
    if(dayToday == 3){
        dayToday = daysOfWeek[2]
    }
    if(dayToday == 4){
        dayToday = daysOfWeek[3]
    }
    if(dayToday == 5){
        dayToday = daysOfWeek[4]
    }
    if(dayToday == 6){
        dayToday = daysOfWeek[5]
    }
    if(dayToday == 7){
        dayToday = daysOfWeek[6]
    }
    const moonth = new Date().toLocaleString('en', {
        month: 'long'
    })
    date.innerHTML = dayToday + ", " + moonth + " " + day 
})