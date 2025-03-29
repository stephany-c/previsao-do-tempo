import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInformations/WeatherInformation'


function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()


  async function searchCity() {
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "a65b2d96f2def614842300a4d041f408"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)

    setWeather(apiInfo.data)

    console.log(data)


  }

  return (

    <div className='previsao-container'>
      <h1> Previsão do Tempo </h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'>
      </input>
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformation weather={weather} />}
    </div>

  )
}

export default App
