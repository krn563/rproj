import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  //let counter=5;  
  const addValue=()=>{
    if (counter<20) {
      setCounter(counter+1) 
    }
    //console.log("clicked",counter)
    //counter=counter+1;
  }
  const removeValue=()=>{
    if (counter>0) {
      setCounter(counter-1)
      //console.log("clicked",counter)
    }
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
