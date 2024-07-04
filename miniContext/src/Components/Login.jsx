import React,{useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const {setUser}=useContext(UserContext)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
        placeholder='Username' />
        <input type="text" 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login