import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-4 bg-white ml-10 mr-10 rounded-2xl px-10 gap-2">
        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("black")} style={{backgroundColor: "black"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("grey")} style={{backgroundColor: "grey"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
        <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}} className='  pl-10 pr-10 pt-2 pb-2 rounded-2xl text-white'>Red</button>
      </div>
    </div>
  )
}

export default App
