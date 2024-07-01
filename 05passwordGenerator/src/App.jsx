import { useState,useCallback,useEffect, useRef } from 'react'
function App() {
  const [length, setLength]=useState(8)
  const [numAllow, setNumAllow]=useState(false);
  const [charAllow, setCharAllow]=useState(false);
  const [password, setPassword]=useState("");
  //useRef hook
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow) str+="%$#@!&*{}"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass);
  },[length, numAllow,charAllow,setPassword] );
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{ passwordGenerator()},[length,numAllow,charAllow,passwordGenerator])
  //passwordGenerator()
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 font-semibold text-2xl text-center text-orange-500 bg-gray-700 py-2'>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4 py-2'>
          <input
           type="text"
           value={password}
           className="outline-none w-full py-1 px-3"
           placeholder='password' 
           readOnly
           ref={passwordRef} />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> 
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6} 
              max={100} 
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length:{length}</label>
          </div>  
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={()=>{
              setNumAllow((prev)=>!prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>       
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={()=>{
              setCharAllow((prev)=>!prev)
            }} />
            <label htmlFor="charInput">Characters</label>
          </div> 
        </div>
      </div>
      
    </>
  )
}

export default App
