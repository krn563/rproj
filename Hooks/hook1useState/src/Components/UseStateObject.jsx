import React from 'react'
import { useState } from 'react'

function UseStateObject() {
    const [myObject, setMyObject]=useState({
        myName:"John",myAge:20
    })
    const changeName=()=>{
        setMyObject({...myObject,myName:"James"})
    }
  return (
    <>
        <h1 className='text-center text-3xl'>My name is {myObject.myName} and age: {myObject.myAge}</h1>
        <button className='bg-blue-700 p-2 mx-auto flex rounded-lg text-2xl'
            onClick={changeName}
        >Click to change name</button>
    </>
  )
}

export default UseStateObject