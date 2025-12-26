const apiKey = "8d55e9aac297888aa0300f836b34b2d4"; 
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-info").style.display = "none";
        return;
    } else {
        document.querySelector(".error").style.display = "none";
    }
    var data = await response.json();

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed-value").innerHTML = data.wind.speed + " km/h";
    console.log(data);
    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "img/cloudy.svg";
    }
    else if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "img/clear.svg";
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "img/rainy.svg";
    }
    else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "img/drizzle.svg";
    }
    else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "img/mist.svg";
    }
    else if (data.weather[0].main == "Snow") {
        document.querySelector(".weather-icon").src = "img/snow.svg";
    }
    document.querySelector(".weather-info").style.display = "block";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

window.addEventListener("load", () => {
    searchBox.focus();
});
