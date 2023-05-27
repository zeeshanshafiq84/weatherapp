    window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;

    let API_KEY = '32676405e39e746c7f7746f3491194bd'

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector(".temp").innerHTML = ` ${response.data.name}${response.data.main.temp}`
    document.querySelector('.humidity').innerHTML = `${response.data.main.humidity}`
    document.querySelector('.wind').innerHTML = `${response.data.wind.speed}`
    
    
    

})
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML = "Error in Getting Weather Data"
  })
}