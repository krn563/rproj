import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseEffect2() {
    const[width,setWidth]=useState(window.screen.width)
    const actualWidth=()=>{
        console.log(window.innerWidth);
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        console.log("add event")
        window.addEventListener("resize",actualWidth)
        return()=>{
            console.log("remove event")
            window.removeEventListener("resize",actualWidth)
    }
    })
  return (
    <>    
        <h1 className='text-center text-3xl'>The actual size of window is:</h1>
        <h1 className='text-center text-3xl'>{width}</h1>
    </>
  )
}

export default UseEffect2