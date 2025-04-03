import './WeatherInformations5Days.css';

function WeatherInformation5Days({ weather5Days }) {
    let dailyForecast = {};

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);
    console.log(next5DaysForecast);

    return (
        <div className="weather-container">
            <p>Previsão próximos 5 dias</p>
            {next5DaysForecast.map((forecast) => (
                <div key={forecast.dt}>
                    <p>{new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: "long" })}</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                        alt={forecast.weather[0].description}
                    />
                    <p>{forecast.weather[0].description}</p>
                    <p>{forecast.main.temp_min}°C min / {forecast.main.temp_max}°C máx</p>
                </div>
            ))}
        </div>
    );
}

export default WeatherInformation5Days;
