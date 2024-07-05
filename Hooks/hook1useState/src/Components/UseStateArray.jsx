import React,{useState} from 'react'

function UseStateArray() {
    const bioData=[
        {
            id:0,myName:"vinod", age:26
        },
        {
            id:1,myName:"virender", age:30
        },
        {
            id:2,myName:"abc", age:32
        },
        {
            id:5,myName:"def", age:19
        }
    ]
    const [myArr, setMyArr] = useState(bioData);
    const clearArray=()=>{
        setMyArr([])
    }
  return (
    <>
    {
        myArr.map((currElement)=>{
            return <h1 className='text-center m-auto text-3xl' key={currElement.id}>Name:{currElement.myName}, age:{currElement.age}</h1>
        })
    }
    <button className='bg-blue-400 p-2 rounded-md flex mx-auto'
        onClick={clearArray}
    >Clear</button>
    </>
  )
}

export default UseStateArray