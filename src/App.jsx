import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()


  async function searchCity() {
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "a65b2d96f2def614842300a4d041f408"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const data = await axios.get(url)
    console.log(data)


  }

  return (

    <div>
      <h1> Previsão do Tempo </h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'>
      </input>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
