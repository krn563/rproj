import React,{useState,useEffect} from 'react'
import BasicForm from './Components/Forms/BasicForm'
import Uncontrolled from './Components/Forms/Uncontrolled'
import ShortCircuit from './Components/ShortCircuit'
import Todo from './Components/todo'
import UseStateArray from './Components/UseStateArray'
import UseStateObject from './Components/UseStateObject'
import GithubUsers from './UseEffects/Github/GithubUsers'
import UseEffect1 from './UseEffects/UseEffect1'
import UseEffect2 from './UseEffects/UseEffect2'
import UseEffectAPI from './UseEffects/UseEffectAPI'

function App() {
  const [users,setUsers]=useState([])
  const getUsers=async()=>{
    const res=await fetch('https://api.github.com/users')
    setUsers(await res.json())
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
      <GithubUsers users={users}/>
    
    </>
  )
}

export default App