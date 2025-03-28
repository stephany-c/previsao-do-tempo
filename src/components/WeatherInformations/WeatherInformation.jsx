

function WeatherInformation({ weather }) {
    console.log(weather)

    if (!weather || !weather.main) {
        return <p>Insira o local que queira saber o clima</p>;
    }
    return (
        <div className="WeatherInformation" >
            <h1>{weather.name}</h1>

            {weather.visibility}
            <p>Temperatura: {weather.main.temp}°C</p>
            <p>Temperatura: {weather.main.temp}°C</p>
            <p>Sensação térmica: {weather.main.feels_like}°C</p>
            <p>Umidade: {weather.main.humidity}%</p>
            <p>Pressão: {weather.main.pressure} hPa</p>


        </div>







    )

}


export default WeatherInformation