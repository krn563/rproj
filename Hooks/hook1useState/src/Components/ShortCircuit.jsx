import React from 'react'
import { useState } from 'react'

function ShortCircuit() {
    const [data,myData]=useState('Hello')
  return (
    <>
        <h1 className='text-center text-3xl'>OR Operator {data||'Byee'}</h1>
        <h1 className='text-center text-3xl'>And Operator {data&&'Byee'}</h1>
        <h1 className='text-center text-3xl'>Create more html element 
            {data&&
            <>
                <h1 className='text-center text-3xl'>In HTML element created</h1>
            </>}
        </h1>
    </>
  )
}

export default ShortCircuit