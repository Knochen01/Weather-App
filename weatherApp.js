




let weather = {
    "apiKey":"32e034f9bc76948038a06f13f6424fa9",
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km";          
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1900×700/?$" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}



document.querySelector(".search-bar").addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        weather.search();
    }
})



document
        .querySelector("button")
        .addEventListener('click', function(e) {
            e.preventDefault();
            weather.search();

})


weather.fetchWeather("Denver")