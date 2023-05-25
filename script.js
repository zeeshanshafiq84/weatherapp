    window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;

    let API_KEY = '32676405e39e746c7f7746f3491194bd'

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector('#result').innerHTML = `current Temprature of ${response.data.name} is ${response.data.main.temp}°C`
    document.querySelector('#humidity').innerHTML = `Humidity <br/> ${response.data.main.humidity}`

})
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML = "Error in Getting Weather Data"
  })
}