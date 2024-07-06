import React from 'react'
import { useState } from 'react'

function BasicForm() {
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [allEntry,setAllEntry]=useState([])
    const submitForm=(e)=>{
        e.preventDefault()
        if(email&&password){
            const newEntry={id:new Date().getTime.toString(),email,password};
            setAllEntry([...allEntry,newEntry])
        // console.log(allEntry);
            setEmail('')
            setPassword('')
        }
        else{
            alert("Please fill the form")
        }
    }
  return (
    <>
        <div className='text-center text-3xl'>BasicForm</div>
        <form action="" onSubmit={submitForm} 
        className='text-center text-lg bg-blue-200 w-fit m-auto p-4 border-2 border-black rounded-md grid grid-cols-1 justify-center'>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="text" name='email' id='email' autoComplete='off' 
                        className='border-2 border-black rounded-md p-2'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} /><br />
            </div>
            <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' id='password' autoComplete='off' 
                        className='border-2 border-black rounded-md p-2'
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit' 
              className='rounded-lg bg-blue-400 hover:bg-blue-700 p-2 mt-2 border-2 border-black w-fit flex mx-auto'  >
                    Login</button>
        </form>
        <div>
            {
                allEntry.map((currEle)=>{
                    const {id,email,password}=currEle;
                    return(                        
                        <div className='text-center text-2xl' key={id}> Credential are:
                            <p>{email}</p>
                            <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
    
  )
}

export default BasicForm