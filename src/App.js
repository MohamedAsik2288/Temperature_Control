import React,{useState} from 'react'

const App = () => {
  const [temperatureValue,setTemperatureValue] =useState(10);
  const [temperautreColor,setTemperatureColor]=useState("cold");

  const incrementTemp =()=> {
      if(temperatureValue===30) return;
      const newtemp =temperatureValue+1;
      if(newtemp >=15 && newtemp <=20){
        setTemperatureColor('hot')
      }
    setTemperatureValue(newtemp)
  }

  const decreTemp =()=> {
    if(temperatureValue===0) return;
    const newtemp =temperatureValue-1;
    if(newtemp <15){
      setTemperatureColor('cold')
    }
    
  setTemperatureValue(newtemp)
}
 
   

  return (
    <div className='app-container'> 
      <div className='temperature-display-container'>
      <div className={`temperature-display ${temperautreColor}`}>{temperatureValue}°C</div>
        



      </div>
      <div className='button-container'>
          <button onClick={()=>incrementTemp() }>+</button>
          <button onClick={()=>decreTemp() }>-</button>
        </div>
   </div>
  )
}

export default App