const time = document.querySelector('.time');

setInterval(function getTimeOfDay() {
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
        dayOfDay = weekDay.getDay(),
        dayToday = weekDay.getDate();
    if (dayOfDay == 1) {
        dayOfDay = daysOfWeek[0]
    }
    if (dayOfDay == 2) {
        dayOfDay = daysOfWeek[1]
    }
    if (dayOfDay == 3) {
        dayOfDay = daysOfWeek[2]
    }
    if (dayOfDay == 4) {
        dayOfDay = daysOfWeek[3]
    }
    if (dayOfDay == 5) {
        dayOfDay = daysOfWeek[4]
    }
    if (dayOfDay == 6) {
        dayOfDay = daysOfWeek[5]
    }
    if (dayOfDay == 7) {
        dayOfDay = daysOfWeek[6]
    }
    const moonth = new Date().toLocaleString('en', {
        month: 'long'
    })
    date.innerHTML = dayOfDay + ", " + moonth + " " + dayToday
})

const timeOfSet = document.querySelector('.greeting')

GreetingDayOut = ['morning', 'afternoon', 'evening', 'night']

const GreetingsOfDay = () => {
    let day = new Date(),
        hourDayOut = day.getHours(),
        GreetingDay;

    if (hourDayOut >= 0 && hourDayOut < 6) {
        GreetingDay = GreetingDayOut[0]
    }
    else if (hourDayOut >= 12 && hourDayOut < 18) {
        GreetingDay = GreetingDayOut[1]
    }
    else if (hourDayOut >= 18 && hourDayOut < 23) {
        GreetingDay = GreetingDayOut[2]
    }
    else {
        GreetingDay = GreetingDayOut[3]
    }
    timeOfSet.innerHTML = 'Good ' + GreetingDay;

    return GreetingDay
}


///------localStorage-----///

const nameInput = document.querySelector('.name');
const nameInputHolder = nameInput.placeholder = '[Enter name]';

function setLocalStorage() {
    localStorage.setItem('nameOutput', nameInput.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('nameOutput')) {
        nameInput.value = localStorage.getItem('nameOutput');
    }
}
window.addEventListener('load', getLocalStorage)

//// slider img ////

let bgNum = Math.floor(Math.random() * ((20 - 1) + 2));

const buttonLeft = document.querySelector('.slide-prev.slider-icon');
const buttonRight = document.querySelector('.slide-next.slider-icon');
let randomNum = bgNum;

function getSlidePrev() {
    if (randomNum === 1) {
        randomNum = 20;
    } else {
        randomNum--
        function setBg() {
            let timeOfDay = GreetingsOfDay();
            const img = new Image();
            img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            };
        }
        setBg();
        console.log(randomNum)
    }
}


function getSlideNext() {
    if (randomNum === 20) {
        randomNum = 1

    } else {
        randomNum++
        function setBg() {
            let timeOfDay = GreetingsOfDay();
            const img = new Image();
            img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`;
            };
        }
        setBg();
        console.log(randomNum)
    }
}
buttonRight.addEventListener('click', getSlideNext)
buttonLeft.addEventListener('click', getSlidePrev)

console.log(bgNum)

const body = document.querySelector('body')

const setBg = () => {
    let timeOfDay = GreetingsOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    };
}
setBg();









