
const API_KEY = 'fb9373041ea789655fd025ad827f6803';

async function getWeather() {
  const cityInput = document.getElementById('city-input');
  const weatherInfo = document.getElementById('weather-info');
  const city = cityInput.value;

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
      weatherInfo.innerHTML = '<p style="color: #e74c3c;">City not found</p>';
    } else {
      const weather = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;

      weatherInfo.innerHTML = `
                        <h2>Weather in ${city}</h2>
                        <p><strong>Description:</strong> ${weather}</p>
                        <p><strong>Temperature:</strong> ${temp}°C</p>
                        <p><strong>Humidity:</strong> ${humidity}%</p>
                    `;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfo.innerHTML = '<p style="color: #e74c3c;">An error occurred while fetching weather data</p>';
  }
}
