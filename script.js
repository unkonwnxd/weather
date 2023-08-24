$(document).ready(function () {
  $("#values").click(function () {
    var API_key = "3d8fd85737355cafaef9e03b1528a1fe";
    var city = $("#cityInput").val();
    console.log(city);
    var cnt = 7;
    
    var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&cnt=" +
    cnt +
    "&units=imperial" +
    "&appid=" +
    API_key;
    
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (list) {
      console.log(queryURL);
      $("#city").html("<h2><b>" + list.city.name + " Weather Details</b></h2>");
      
      $.ajax({
        url:
        "https://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&apikey=3d8fd85737355cafaef9e03b1528a1fe",
        method: "GET",
      }).then(function (uvi) {
        console.log(uvi);
        
        //BEGIN DAY ONE
        
        console.log(list.list[0].weather[0].description);
        var descriptionOne = list.list[0].weather[0].description;
        $("#description-day-1").text(descriptionOne);
        
        console.log(list.list[0].main.temp);
        var tempOne = list.list[0].main.temp;
        $("#temp-day-1").text(tempOne);
        $("#temperature").text("Temp (°F): " + tempOne);
        
        console.log(list.list[0].main.humidity);
        var humidityOne = list.list[0].main.humidity;
        $("#humidity-day-1").text(humidityOne);
        $("#hot-tub").text("Humidity: " + humidityOne);
        
        console.log(list.list[0].wind.speed);
        var windspeedOne = list.list[0].wind.speed;
        $("#windspeed-day-1").text(windspeedOne);
        $("#kite").text("Windspeed: " + windspeedOne);
        
        console.log(uvi.value);
        var uvIndex = uvi.value;
        $("#uvi-day-1").text(uvIndex);
        $("#sunglasses").text("UV Index: " + uvIndex);
        
        //BEGIN DAY 2
        console.log(list.list[1].weather[0].description);
        var descriptionTwo = list.list[1].weather[0].description;
        $("#description-day-2").text(descriptionTwo);
        
        console.log(list.list[1].main.temp);
        var tempTwo = list.list[1].main.temp;
        $("#temp-day-2").text(tempTwo);
        
        console.log(list.list[1].main.humidity);
        var humidityTwo = list.list[1].main.humidity;
        $("#humidity-day-2").text(humidityTwo);
        
        console.log(list.list[1].wind.speed);
        var windspeedTwo = list.list[1].wind.speed;
        $("#windspeed-day-2").text(windspeedTwo);
        
        //BEGIN DAY 3
        
        console.log(list.list[2].weather[0].description);
        var descriptionThree = list.list[2].weather[0].description;
        $("#description-day-3").text(descriptionThree);
        
        console.log(list.list[2].main.temp);
        var tempThree = list.list[2].main.temp;
        $("#temp-day-3").text(tempThree);
        
        console.log(list.list[2].main.humidity);
        var humidityThree = list.list[2].main.humidity;
        $("#humidity-day-3").text(humidityThree);
        
        console.log(list.list[2].wind.speed);
        var windspeedThree = list.list[2].wind.speed;
        $("#windspeed-day-3").text(windspeedThree);
        
        //BEGIN DAY 4
        
        console.log(list.list[3].weather[0].description);
        var descriptionFour = list.list[3].weather[0].description;
        $("#description-day-4").text(descriptionFour);
        
        console.log(list.list[3].main.temp);
        var tempFour = list.list[3].main.temp;
        $("#temp-day-4").text(tempFour);
        
        console.log(list.list[3].main.humidity);
        var humidityFour = list.list[3].main.humidity;
        $("#humidity-day-4").text(humidityFour);
        
        console.log(list.list[3].wind.speed);
        var windspeedFour = list.list[3].wind.speed;
        $("#windspeed-day-4").text(windspeedFour);
        
        //BEGIN DAY 5
        
        console.log(list.list[4].weather[0].description);
        var descriptionFive = list.list[4].weather[0].description;
        $("#description-day-5").text(descriptionFive);
        
        console.log(list.list[4].main.temp);
        var tempFive = list.list[4].main.temp;
        $("#temp-day-5").text(tempFive);
        
        console.log(list.list[4].main.humidity);
        var humidityFive = list.list[4].main.humidity;
        $("#humidity-day-5").text(humidityFive);
        
        console.log(list.list[4].wind.speed);
        var windspeedFive = list.list[4].wind.speed;
        $("#windspeed-day-5").text(windspeedFive);
        console.log(list.list[3].weather[0].description);
        var descriptionFour = list.list[3].weather[0].description;
        $("#description-day-4").text(descriptionFour);
        
        console.log(list.list[3].main.temp);
        var tempFour = list.list[3].main.temp;
        $("#temp-day-4").text(tempFour);
        
        console.log(list.list[3].main.humidity);
        var humidityFour = list.list[3].main.humidity;
        $("#humidity-day-4").text(humidityFour);
        
        console.log(list.list[3].wind.speed);
        var windspeedFour = list.list[3].wind.speed;
        $("#windspeed-day-4").text(windspeedFour);
        
        //BEGIN DAY 6
        
        console.log(list.list[5].weather[0].description);
        var descriptionSix = list.list[5].weather[0].description;
        $("#description-day-6").text(descriptionSix);
        
        console.log(list.list[5].main.temp);
        var tempSix = list.list[4].main.temp;
        $("#temp-day-6").text(tempSix);
        
        console.log(list.list[5].main.humidity);
        var humiditySix = list.list[5].main.humidity;
        $("#humidity-day-6").text(humiditySix);
        
        console.log(list.list[5].wind.speed);
        var windspeedSix = list.list[5].wind.speed;
        $("#windspeed-day-6").text(windspeedSix);
        
        //BEGIN DAY 7
        
        console.log(list.list[6].weather[0].description);
        var descriptionSeven = list.list[6].weather[0].description;
        $("#description-day-7").text(descriptionSeven);
        
        console.log(list.list[6].main.temp);
        var tempSeven = list.list[6].main.temp;
        $("#temp-day-7").text(tempSeven);
        
        console.log(list.list[6].main.humidity);
        var humiditySeven = list.list[6].main.humidity;
        $("#humidity-day-7").text(humiditySeven);
        
        console.log(list.list[6].wind.speed);
        var windspeedSeven = list.list[6].wind.speed;
        $("#windspeed-day-7").text(windspeedSeven);
      });
    });
  });
});