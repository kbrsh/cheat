var weather = {};
var tempEl = document.getElementById("temp"),
  cityEl = document.getElementById("city"),
  countryEl = document.getElementById("country"),
  iconEl = document.getElementById("icon"),
  unitEl = document.getElementById("unit")
var units = "imperial";
var unitAbb = "°F";
var icons = {
  'Rain': {
    'icon': '<i class="wi wi-rain-mix"></i>'
  },
  'Drizzle': {
    'icon': '<i class="wi wi-drizzle-mix"></i>'
  },
  'Clear': {
    'icon': '<i class="wi wi-day-sunny"></i>'
  },
  'Clouds': {
    'icon': '<i class="wi wi-cloudy"></i>'
  },
  'Thunderstorm': {
    'icon': '<i class="wi wi-storm-showers"></i>'
  }
}


function loc() {
  var scr1 = document.createElement('script');
  scr1.src = 'http://ipinfo.io/json?callback=dataLoc';
  document.body.appendChild(scr1);
}

function dataLoc(data) {
  weather.lat = data.loc.split(',')[0];
  weather.lon = data.loc.split(',')[1];
  weather.city = data.city;
  weather.country = data.country;
  getWeather();
}

function getWeather() {
  var scr2 = document.createElement('script');
  scr2.src = 'http://api.openweathermap.org/data/2.5/weather?&lat=' + weather.lat + '&lon=' + weather.lon + '&units=' + units + '&appid=41e799f5df150e08196ac5c32558521a&callback=dataWeather';
  document.body.appendChild(scr2);
}

function dataWeather(data) {
  weather.temp = data.main.temp
  weather.icon = data.weather[0].main
  update();
}


function update() {
  cityEl.innerHTML = weather.city;
  countryEl.innerHTML = weather.country;
  tempEl.innerHTML = Math.round(weather.temp);
  unitEl.innerHTML = unitAbb;
  iconEl.innerHTML = icons[weather.icon].icon
}

function changeUnit() {
  if (units === "imperial") {
    units = "metric";
    unitAbb = "°C";
  } else if (units === "metric") {
    units = "imperial";
    unitAbb = "°F"
  }
  getWeather()
}

function dayOrNight() {
  var hours = new Date().getHours();
  if (hours > 6 && hours < 20) {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1444124660570-7104d87d72b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c8cf95aa5e2c46aadd38921129e7ced4')";
  }
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5f29d037842c14cb81cddea387221b20')"
}
unitEl.addEventListener("click", changeUnit);
dayOrNight();
loc();
