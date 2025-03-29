import './WeatherInformation.css'

function WeatherInformation({ weather }) {
    console.log(weather)


    return (
        <div className="weather-container" >
            <h1>{weather.name}</h1>
            {weather.visibility}

            <div>
                <img
                    scr={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />

                <p>Temperatura: {weather.main.temp}°C</p>
            </div>
            <div>
                <p>{weather.weather[0].descriprion}</p>

            </div>
            <div className='medidas'>
                <div><p>Sensação térmica: {weather.main.feels_like}°C</p></div>
                <div><p>Umidade: {weather.main.humidity}%</p></div>
                <div><p>Pressão: {weather.main.pressure} hPa</p></div>
            </div>
        </div>







    )

}


export default WeatherInformation