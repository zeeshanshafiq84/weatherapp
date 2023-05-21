   window.getWeather = function(){

    let cityName = document.querySelector ("#cityName").value;
    
   let API_KEY = '32676405e39e746c7f7746f3491194bd'
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector("#result").innerHTML = "weather data successfully retrived"
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML = "error in getting weather data"
  })
}