import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);

  const passwordGenarete = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed,setPassword])

  useEffect(() => {
    passwordGenarete();
  }, [length, numberAllowed, charAllowed, passwordGenarete])

  const copyText = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className='bg-gray-800 w-full max-w-md mx-auto rounded-lg px-6 py-9 my-8 text-orange-500'>
      <h1 className="text-4xl text-center mb-4 text-white">Password Generator</h1>
      <div className="flex mb-2">
      <input 
      type="text"
      value={password}
      placeholder='password'
      className='outline-none w-full py-1 px-3 bg-white rounded-lg text-3xl'
      ref={passwordRef}
      readOnly
      />
      <button onClick={copyText} className='bg-blue-500 py-1 px-3 text-white rounded-lg'>Copy</button>
      </div>
      
      <div className="flex gap-2">
      <input 
      type="range"
      value={length}
      min={6}
      max={50}
      className='cursor-ponter'
      onChange={(e) => {setLength(e.target.value)}}
       />
       <label>Length: {length}</label>
       <input 
        type="checkbox" 
        defaultChecked={numberAllowed} 
        id=""
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }} 
        />
        <label>Numbers</label>
        <input 
          type="checkbox" 
          defaultChecked={charAllowed} 
          id="" 
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
      </div>
      
      </div>
    </>
  )
}

export default App
