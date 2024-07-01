import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    userName: "Krn",
    age: 20,
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-600 text-black rounded-md mb-4'>Tailwind Class</h1>
      <Card userName="Lily" btnText="Click me"/>
      <Card userName="Potter"/>
    </>
  )
}

export default App
