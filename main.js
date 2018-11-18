(async function test (data){
    var data = await api.fetchData("http://api.openweathermap.org/data/2.5/forecast?lat=59.334591&lon=18.063240&units=metric&APPID=81858f396cae7a9ba5f83e65ae9f9ab7");
   //Konstruktor för en dag
    function Day(date, minTemp, maxTemp, icon) {
        this.date = date;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.icon = icon;
    }
    //Loopa igenom allt och pusha in data i ett objekt
    let dataObject = [];
    for(let x=0;x<data.list.length;x+=8){
    var Today = new Day(data.list[x].dt_txt, data.list[x].main.temp_min, data.list[x].main.temp_max, data.list[x].weather[0].id);

    // Rendera element och lägg in data.



        // Info om hur datan för dagens datum ska visas ut för sidan.
    if(x==0){
    let bigContainer = document.getElementById("main-weather");
    let weather = document.createElement("img");
    weather.setAttribute("class", "weather-icon");
    weather.setAttribute("id", "icon-"+x);
    let desc = document.createElement("h2");
    bigContainer.appendChild(weather);
    bigContainer.appendChild(desc);
    console.log(Today.icon);
    if (Today.icon > 800) {
        weather.setAttribute("src", "cloudy.png");
        desc.innerHTML = "Cloudy";
    } else if (Today.icon == 800) {
        weather.setAttribute("src", "shining-sun.png");
        desc.innerHTML = "Clear skies";
    } else if (600 < Today.icon && Today.icon < 700) {
        weather.setAttribute("src", "snowing.png");
        desc.innerHTML = "Snow"
;    } else if (200 < Today.icon && Today.icon < 600) {
        weather.setAttribute("src", "rain.png");
        desc.innerHTML = "Rain";
    } else {
        console.log("Weather code dont have an icon!")
    }
    
    let temp = document.createElement("h3");
    temp.setAttribute("class", "weather-temp");
    temp.setAttribute("id", "temp-"+x);
    temp.innerHTML = "min " + Math.floor(Today.minTemp) + "&#176;";
    bigContainer.appendChild(temp);

    let tempMax = document.createElement("h3");
    temp.setAttribute("class", "weather-temp");
    temp.setAttribute("id", "temp-"+x);
    temp.innerHTML = Math.floor(Today.minTemp) + "&#176;";
    bigContainer.appendChild(temp);

    let date = document.createElement("h3");
    date.innerHTML = "Today";
    date.setAttribute("class", "weather-date");
    date.setAttribute("id", "date-"+x);
    bigContainer.appendChild(date);

} else {
    let container = document.getElementById("forecast");
    let weather = document.createElement("img");
    let desc = document.createElement("p");
    desc.innerHTML = "Hey there";
    weather.setAttribute("class","weather-icon");
    weather.setAttribute("id", "icon-"+x);
    container.appendChild(weather);
    container.appendChild(desc);
    console.log(Today.icon);
    if (Today.icon > 800) {
        weather.setAttribute("src", "cloudy.png");
        desc.innerHTML = "Cloudy";
    } else if (Today.icon == 800) {
        weather.setAttribute("src", "shining-sun.png");
        desc.innerHTML = "Clear skies";
    } else if (600 < Today.icon && Today.icon < 700) {
        weather.setAttribute("src", "snowing.png");
        desc.innerHTML = "Snow"
;    } else if (200 < Today.icon && Today.icon < 600) {
        weather.setAttribute("src", "rain.png");
        desc.innerHTML = "Rain";
    } else {
        console.log("Weather code dont have an icon!")
    }

    let temp = document.createElement("h3");
    temp.setAttribute("class", "weather-temp");
    temp.setAttribute("id", "temp-"+x);
    temp.innerHTML = Math.floor(Today.minTemp) + "&#176;";
    container.appendChild(temp);

    let date = document.createElement("h3");
    date.innerHTML = Today.date;
    date.setAttribute("class", "weather-date");
    date.setAttribute("id", "date-"+x);
    container.appendChild(date);
}
}
console.log(dataObject);
})()