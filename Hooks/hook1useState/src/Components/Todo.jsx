import React from 'react'
import { useState } from 'react';
function Todo() {
    const myTask=[
        {
            id:0,task:"React"
        },
        {
            id:1,task:"HTMl"
        },
        {
            id:2,task:"JS"
        },
        {
            id:5,task:"CSS"
        }
    ]
    const [myArr, setMyArr] = useState(myTask);
    const clearArray=()=>{
        setMyArr([])
    }
    const removeEle=(id)=>{
        const newArray=myArr.filter((currElement)=>{
            return id!==currElement.id
        })
        setMyArr(newArray)
    }
  return (
    <>
    {
        myArr.map((currElement)=>{
            return(
                <h1 className='text-center m-auto text-3xl' 
                    key={currElement.id}>
                        Task:{currElement.task}
                    <button className='bg-blue-600 rounded-md py-2 px-1 mt-2 text-lg mx-2'
                        onClick={()=>removeEle(currElement.id)}>
                        Complete
                    </button>
                </h1>
            )
        })
    }
    <button className='bg-blue-400 p-2 rounded-md text-2xl flex mx-auto mt-2 px-6'
        onClick={clearArray}
    >Clear All</button>
    </>
  )
}
export default Todo