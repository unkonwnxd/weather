const cityCoordinates = {};

// Fetch city coordinates and populate the selector options
fetch('city_coordinates.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        for (const row of rows.slice(1)) {
            const [latitude, longitude, city, country] = row.split(',');
            const cityName = city.toLowerCase().trim();
            cityCoordinates[cityName] = { lat: parseFloat(latitude), lon: parseFloat(longitude) };

            // Dynamically add city options to the selector
            const option = document.createElement('option');
            option.value = cityName;
            option.textContent = `${city}, ${country}`;
            citySelector.appendChild(option);
        }
    });

const citySelector = document.getElementById('citySelector');
const weatherDisplay = document.getElementById('weatherDisplay');

citySelector.addEventListener('change', () => {
    const selectedCity = citySelector.value;
    const coordinates = cityCoordinates[selectedCity];
    if (!coordinates) {
        weatherDisplay.innerHTML = 'Coordinates not available.';
        return;
    }



    const apiUrl = `http://www.7timer.info/bin/api.pl?lon=${coordinates.lon}&lat=${coordinates.lat}&product=civil&output=json`;

    // Make API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currentDate = new Date();
            const forecastData = data.dataseries;
            
            let weatherHTML = `<h2>${selectedCity.toUpperCase()} Weather Forecast</h2>`;
            weatherHTML += '<ul>';

            for (let index = 0; index < 7; index++) {
                const forecastDate = new Date(currentDate);
                forecastDate.setDate(currentDate.getDate() + index); // Increment date for each forecast
                
                const dayData = forecastData[index];
                const formattedDate = forecastDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                const weatherImage = getWeatherImage(dayData.weather);

                weatherHTML += `
                    <li>
                        <strong>${formattedDate}</strong><br>
                        <img class="weather-icon" src="${weatherImage}" alt="${dayData.weather}">
                        Temperature: ${dayData.temp2m}°C
                    </li>`;
            }

            weatherHTML += '</ul>';
            weatherDisplay.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDisplay.innerHTML = 'An error occurred while fetching weather data.';
        });
});

function getWeatherImage(weather) {
    // This is a simplified mapping of weather conditions to images
    // Make sure the image paths are correct based on your file structure
    const weatherImages = {
        clear: './images/clear.png',
        pcloudy: './images/pcloudy.png',
        mcloudy: './images/mcloudy.png',
        cloudy: './images/cloudy.png',
        lightrain: './images/lightrain.png',
        rain: './images/rain.png',
        lightsnow: './images/lightsnow.png',
        snow: './images/snow.png'
    };

    const lowerCaseWeather = weather.toLowerCase();
    return weatherImages[lowerCaseWeather] || 'images/default.png';
}
