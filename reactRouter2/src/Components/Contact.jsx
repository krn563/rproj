import React from 'react'
import{NavLink, useNavigate} from 'react-router-dom'
import Header from './Header'
function Contact() {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
  return (
    <>
      {/* <Header/> */}
      <h1 className='text-center text-3xl text-orange-400'>Contact Us</h1>
      <button onClick={()=>goBack()}>Go Back</button>
      <button onClick={goBack}>Go BackSame</button>
    </>
  )
}

export default Contact