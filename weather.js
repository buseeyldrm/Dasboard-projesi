const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.closeIcon');
const openIcon = document.querySelector('.openIcon');
const url = "https://api.openweathermap.org/data/2.5/";
const key = "a9e053340ed8264e36fa36e17bfc8a39";


const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value);
        getResult2(searchBar.value);
    }

}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}
const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let image = document.querySelector('.image');
    image.setAttribute("src", `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`);

    let feelLike = document.querySelector('.info');
    feelLike.innerText = `${Math.round(result.main.feels_like)}°C`;

    let windInfo = document.querySelector('.wind-info');
    windInfo.innerText = `${result.wind.speed}km/sa`;

    let humidityInfo = document.querySelector('.humidity-info');
    humidityInfo.innerText = `%${result.main.humidity}`;

    let date = new Date(result.sys.sunrise * 1000);
    let date2 = new Date(result.sys.sunset * 1000);


    let sunriseInfo = document.querySelector('.sunrise-info');
    sunriseInfo.innerText = `${date.getHours()}:${date.getMinutes()} / ${date2.getHours()}:${date2.getMinutes()}`;
}

const getResult2 = (cityName) => {
    let query = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult2)
}
const displayResult2 = (result) => {
    console.log(result)
    let images = document.querySelectorAll('.box .imageInfo img');
    images.forEach((imageWeather, index) => {
        imageWeather.setAttribute("src", `https://openweathermap.org/img/wn/${result.list[index].weather[0].icon}@2x.png`);
    });

    let descDay = document.querySelectorAll('.boxInfo');
    descDay.forEach((day, index) => {
        day.innerText = result.list[index].weather[0].description;
    });

    let dayWeather = document.querySelectorAll('.box .imageInfo  .boxday');
    dayWeather.forEach((weaDay, index) => {
        weaDay.innerText = hour((result.list[index].dt_txt), 16);
    });

    let min_max = document.querySelectorAll('.deg');
    min_max.forEach((temp, index) => {
        temp.innerText = `${Math.round(result.list[index].main.temp)}°C / ${Math.round(result.list[index].main.feels_like)}°C`;

    });
}

function samsunWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Samsun&appid=4ac125c3cead0ab707544840eae7021f&units=metric&lang=tr")
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log("samsun", result);
            let city = document.querySelector('.city');
            city.innerText = `${result.name},${result.sys.country}`;

            let temp = document.querySelector('.temp');
            temp.innerText = `${Math.round(result.main.temp)}°C`;

            let desc = document.querySelector('.desc');
            desc.innerText = `${result.weather[0].description}`;


            let feel = document.querySelector('.info');
            feel.innerText = `${result.main.feels_like}`;

            let windInfo = document.querySelector('.wind-info');
            windInfo.innerText = `${result.wind.speed}km/sa`;

            let humidity = document.querySelector('.humidity-info');
            humidity.innerText = `%${result.main.humidity}`;

            let sun = new Date((result.sys.sunrise) * 1000);
            let sunset = new Date((result.sys.sunset) * 1000);

            let sunriseInfo = document.querySelector('.sunrise-info');
            sunriseInfo.innerText = `${sun.getHours()}:${sun.getMinutes()} / ${sunset.getHours()}:${sunset.getMinutes()}`;

            let image = document.querySelector('.image');
            image.setAttribute("src", `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`);

        });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Samsun&appid=4ac125c3cead0ab707544840eae7021f&units=metric&lang=tr")
        .then(res => {
            return res.json();
        }).then(result => {
            console.log(result);
            let image = document.querySelectorAll('.cont-bottom .imageInfo img');
            image.forEach((imageWeather, index) => {
                imageWeather.setAttribute("src", `https://openweathermap.org/img/wn/${result.list[index].weather[0].icon}@2x.png`)
            });

            let wdescription = document.querySelectorAll('.boxInfo');
            wdescription.forEach((day, index) => {
                day.innerText = `${result.list[index].weather[0].description}`;
            });
            let dayWeather = document.querySelectorAll('.box .boxday');
            dayWeather.forEach((weaDay, index) => {
                weaDay.innerText = hour((result.list[index].dt_txt), 16);
            });
            let min_max = document.querySelectorAll('.deg');
            min_max.forEach((temp, index) => {
                temp.innerText = `${Math.round(result.list[index].main.temp)}°C / ${Math.round(result.list[index].main.feels_like)}°C `;
            });
        })
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);

function closeMenu() {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    menu.style.left = "-1000px";
    console.log('kapandı');
}

function openMenu() {
    menu.style.left = "60px";
    console.log("açıldı");
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
}

function hour(txt, max) {
    return txt = txt.substring(10, max);
}


closeIcon.addEventListener('click', closeMenu);
openIcon.addEventListener('click', openMenu);