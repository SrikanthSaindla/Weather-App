
import React,{ useState} from "react"
import "./App.css"
const App=()=>{
const [city,setCity]=useState('')
const [result,setResult]=useState('')
 

   
  const inputChange=(e)=>{
  setCity(e.target.value)
  
  }
  const formHandler=async(e)=>{
    e.preventDefault()
    setCity('')
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    const data= await response.json()
     
     const cel=Math.round(data.main.temp-273.15)
      setResult(`Temperature At ${data.name} -\t ${cel-1}ºC`)
     
  }
   
  return (
    <div className="imgBack">  
    <center> 
      
<h1>Weather App</h1>
<form onSubmit={formHandler}>
  <input type="text" name="city" value={city} 
  placeholder="Enter the City Name" onChange={inputChange}/><br/>
  <button type='submit'>Get Temperature</button>
</form>
<p className="final">{result}</p>
 
    </center>
    </div> 
  )
}

export default App