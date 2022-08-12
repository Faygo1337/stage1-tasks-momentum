import playList from "./playList.js";

const time = document.querySelector('.time');

setInterval(function getTimeOfDay() {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
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

let GreetingDayOut = ['morning', 'afternoon', 'evening', 'night']

const GreetingsOfDay = () => {
    let day = new Date(),
        hourDayOut = day.getHours(),
        GreetingDay;

    if (hourDayOut >= 6 && hourDayOut < 12) {
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
    localStorage.setItem('city', city.value)
    localStorage.setItem('weather', getWeather().value)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('nameOutput')) {
        nameInput.value = localStorage.getItem('nameOutput');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('weather')) {
        getWeather().value = localStorage.getItem('weather');
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
            if (randomNum < 10) {
                img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/0${randomNum}.jpg`;
            } else {
                img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
            }
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
            if (randomNum < 10) {
                img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/0${randomNum}.jpg`;
            } else {
                img.src = `https://raw.githubusercontent.com/Faygo1337/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
            }
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

//..weather widget..//
//appid
// https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=9c95a9e4172b94186fe814eb375797ef&units=metric
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city')
const cityOfMinsk = city.value = 'Minsk'
async function getWeather() {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=9c95a9e4172b94186fe814eb375797ef&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
    catch (err) {
        alert(`Error! city not found for '${city.value}'!`)
    };
}
getWeather()
city.addEventListener('change', getWeather);

//// quote of the day ////

const quote = document.querySelector('.quote');
const changeQuote = document.querySelector('.change-quote')
const author = document.querySelector('.author');

async function getQuote() {
    const urlQuote = `https://favqs.com/api/qotd`;
    const res = await fetch(urlQuote);
    const data = await res.json();
    quote.textContent = `"${data.quote.body}"`;
    author.textContent = data.quote.author;
}
getQuote()

changeQuote.addEventListener('click', getQuote);

//// audioplayer ////
const button = document.querySelector('.play.player-icon');
const prevIcon = document.querySelector('.play-prev.player-icon')
const nextIcon = document.querySelector('.play-next.player-icon')
let isPlay = false;
let playNum = 0;
const audio = new Audio();
function playAudio() {
    audio.src = playList[playNum].src
    audio.currentTime = 0;
    if (!isPlay) {
        audio.play();
        isPlay = true;
    }
    else {
        isPlay = false;
        audio.pause();
    }
    button.classList.toggle('pause')

}
button.addEventListener('click', playAudio);
function playNext() {
    if (playNum === 3) {
        playNum = -1
    } else {
        playNum++
        audio.src = playList[playNum].src;
        audio.play()

        console.log(playNum)
    }
}
function playPrev() {
    if (playNum === 0) {
        playNum = 4
    } else {
        playNum--
        audio.src = playList[playNum].src;
        audio.play()
        console.log(playNum)
    }
}

audio.addEventListener('ended', function () {
    if (playNum === 3) {
        playNum = 0;
    } else {
        playNum++
        audio.src = playList[playNum].src;
        audio.play()
    }

});

nextIcon.addEventListener('click', playNext)

prevIcon.addEventListener('click', playPrev)



const playListUI = document.querySelector('.play-list')
// const liAll = document.querySelectorAll('.play-item')
function playFor() {
playList.forEach((el, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = el.title
    playListUI.append(li)

    if (playNum ===  el.index) {
        li.classList.add('item-active')
    } else {
        
        li.classList.remove('item-active')
    }

    console.log(index)
})
}
playFor()
// nextIcon.addEventListener('click', playFor)
// prevIcon.addEventListener('click', playFor)