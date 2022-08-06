const time = document.querySelector('.time');

setInterval(function () {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();
    day = currentTime.getDay()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (day < 10) {
        day = "0" + day
    }
    time.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000)

const date = document.querySelector('.date')
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
setInterval(function () {
    let weekDay = new Date(),
        day = weekDay.getDay(),
        dayToday = weekDay.getDate();
    if (dayToday == 1) {
        dayToday = daysOfWeek[0]
    }
    if (dayToday == 2) {
        dayToday = daysOfWeek[1]
    }
    if (dayToday == 3) {
        dayToday = daysOfWeek[2]
    }
    if (dayToday == 4) {
        dayToday = daysOfWeek[3]
    }
    if (dayToday == 5) {
        dayToday = daysOfWeek[4]
    }
    if (dayToday == 6) {
        dayToday = daysOfWeek[5]
    }
    if (dayToday == 7) {
        dayToday = daysOfWeek[6]
    }
    const moonth = new Date().toLocaleString('en', {
        month: 'long'
    })
    date.innerHTML = dayToday + ", " + moonth + " " + day
})

const timeOfSet = document.querySelector('.greeting')

GreetingDayOut = ['morning', 'afternoon', 'evening', 'night']

setTimeout(function () {
    let day = new Date(),
        hourDayOut = day.toLocaleTimeString().slice(0, -6),
        GreetingDay;

    if (hourDayOut >= 0 && hourDayOut < 6) {
        GreetingDay = GreetingDayOut[0]
    }
    if (hourDayOut >= 12 && hourDayOut < 18) {
        GreetingDay = GreetingDayOut[1]
    }
    if (hourDayOut >= 18 && hourDayOut < 23) {
        GreetingDay = GreetingDayOut[2]
    }
    else {
        GreetingDay = GreetingDayOut[3]
    }
    timeOfSet.innerHTML = 'Good ' + GreetingDay
})

///------localStorage-----///

const nameInput = document.querySelector('.name');
const nameInputHolder = nameInput.placeholder = '[Enter name]';

function setLocalStorage() {
    localStorage.setItem('nameOutput', nameInput.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('nameOutput')) {
        nameInput.value = localStorage.getItem('nameOutput');
      }
}
window.addEventListener('load', getLocalStorage)
