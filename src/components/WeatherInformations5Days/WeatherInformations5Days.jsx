import './WeatherInformations5Days.css'

function WeatherInformation5Days({ weather5Days }) {


    let dailyForecast = {

    }

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        console.log(date)
        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)
    console.log(nextFiveDays)





    return (
        <div className="weather-container">
            <h1>five days</h1>
            {next5DaysForecast.map}

        </div>
    )
}

export default WeatherInformation5Days