let weather = {
    "weatherApiKey": "78573e2c11540f57d23779acf6ba6eaa",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.weatherApiKey)
            .then((response) => response.json())
            .then((data) => this.showWeather(data));
    },
    showWeather: function(data) {
        const{name} = data;
        const{icon, description} = data.weather[0];
        const{temp} = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = this.setIcon(icon);
        document.querySelector(".temp").innerText = Math.round(temp) + "\u00B0C";
        document.querySelector(".desc").innerText = description;
        },
    search: function() {
        this.fetchWeather(document.querySelector(".search_bar").value);
    },
    setIcon: function(icon) {
        if(icon[0] == 0 && icon[1] == 1){
            return "sun.png";
        }
        else if(icon[0] == 0 && icon[1] == 2){
            return "suncloud.png";
        }
        else if(icon[0] == 0 && (icon[1] == 3 || icon[1] == 4)){
            return "cloud.png";
        }
        else if(icon[0] == 0 && icon[1] == 9){
            return "rain.png";
        }
        else if(icon[0] == 1 && (icon[1] == 0 || icon[1] == 1)){
            return "rain.png";
        }
        else if(icon[0] == 1 && icon[1] == 3){
            return "snow.png";
        }
        else if(icon[0] == 5 && icon[1] == 0){
            return "fog.png";
        }
        else{
            return "sun.png";
        }
    }
};

weather.fetchWeather("Craiova");

document.querySelector(".search button").addEventListener("click", function(){weather.search(), document.querySelector(".search_bar").value = ""})
document.querySelector(".search_bar").addEventListener("keyup", function(e){if(e.key === "Enter") weather.search(), document.querySelector(".search_bar").value = ""})
