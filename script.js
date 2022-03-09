let weather = {
  apiKey: "5e6f3aa9c42d87b562340f372e266d6d",
  async fetchWeather(city) {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        return this.displayWeather(data);
      });
  },
  displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    document.body.style.backgroundImage =
      `url("https://source.unsplash.com/1600x900/?${name}")`;
  },
  search() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
  }
});




// oop version 

// class Weather {
//   constructor(apiKey) {
//     this.apiKey = apiKey;
//   }
//   async fetchWeather() {
//     const value = document.querySelector(".search-bar").value;
//     await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${this.apiKey}`
//     )
//       .then((res) => res.json())
//       .then((data) => this.displayWeather(data));
//   }

//   displayWeather(data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = `Weather in ${name}`;
//     document.querySelector(
//       ".icon"
//     ).src = `https://openweathermap.org/img/wn/${icon}.png`;
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText =
//       "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
//     document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`;
//   }
// }

// document.querySelector(".search button").addEventListener("click", () => {
//   const weatherApp = new Weather("5e6f3aa9c42d87b562340f372e266d6d");
//   weatherApp.fetchWeather();
// });

// document.querySelector(".search-bar").addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     const weatherApp = new Weather("5e6f3aa9c42d87b562340f372e266d6d");
//     weatherApp.fetchWeather();
//   }
// });
