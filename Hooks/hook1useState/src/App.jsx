import React,{useState} from 'react'

function App() {
  // let val="state hook"
  const changeName=()=>{
    // val="hello hooks"
    // console.log(val);
    setName('State Hooks')
  }
  const changeState=()=>{
    setMyState(!myState)
  }
  const [name,setName]=useState('Hello Hooks')
  const [myState,setMyState]=useState(true)
  return (
    <>
    <h1 className='text-center text-3xl'>{name}</h1>
    <button className='bg-green-600 rounded-lg p-4 
    text-center justify-center
     mx-auto flex' onClick={changeName} >Click here to change</button>
    <h1 className='text-center text-3xl'>{myState?"Hello":"Bye"}</h1>
    <button className='bg-green-600 rounded-lg p-4 
    text-center justify-center
     mx-auto flex' onClick={changeState} >Toggle</button>
    </>
  )
}

export default App