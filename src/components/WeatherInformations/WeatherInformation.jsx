import './WeatherInformation.css'

function WeatherInformation({ weather }) {
    return (
        <div className="weather-container" >
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img
                    alt='icone-tempo' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <div>
                <p className='description'>{weather.weather[0].description}</p>
            </div>
            <div className='details'>
                <div><p>Sensação térmica:{weather.main.feels_like}°C</p></div>
                <div><p>Umidade: {weather.main.humidity}%</p></div>
                <div><p>Pressão: {weather.main.pressure} hPa</p></div>
            </div>
        </div>







    )

}


export default WeatherInformation