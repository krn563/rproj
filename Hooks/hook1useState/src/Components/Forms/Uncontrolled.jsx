import React,{useRef} from 'react'
import { useState } from 'react'

function Uncontrolled() {
    const entryName = useRef(null)
    const [show,setShow]=useState(false)
    const submitForm=(e)=>{
        e.preventDefault()
        const names=entryName.current.value
        names===""?alert('Please fill data'):setShow(true)
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="entryName">Enter your name</label>
                <input className='border-black border-2' type="text" id='entryName' ref={entryName}/>
            </div>
            <button>Submit</button>
        </form>
        <p>{show?`Your name is ${entryName.current.value}`:""}</p>
    </>
  )
}

export default Uncontrolled