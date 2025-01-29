import { useState } from 'react'
import './App.css'

function App() {
  let [counterValue, setcounterValue] = useState(0)

  
  const addValue = () => {
    if(counterValue < 20){
    counterValue = counterValue + 1;
    setcounterValue(counterValue);
    }
  }
  const removeValue = () => {
    if(counterValue > 0){
    counterValue = counterValue - 1;
    setcounterValue(counterValue);
    }
  }

  return (
    <>
      <h1>Chai ur react</h1>
      <h2>Counter Value: {counterValue}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
