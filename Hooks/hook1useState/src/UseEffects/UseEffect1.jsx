import React,{useEffect} from 'react'
import { useState } from 'react'

function UseEffect1() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
       if(count>=1){
        document.title=`Chats(${count})`
       }
       else
        document.title=`Chats`
        
      })
    console.log("hello outside")
  return (
    <>
        <h1 className='text-center text-3xl'>{count}</h1>
        <button onClick={()=>setCount(count+1)}
        className='flex mx-auto justify-center p-2 text-lg bg-blue-400 rounded-md'>Click</button>
    </>
  )
}

export default UseEffect1