import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Header from './Header'
function AboutUs() {
    const navigate=useNavigate();
    const goToContact=()=>{
        navigate("/contact")
    }
  return (
    <>
      {/* <Header/> */}
      <h1 className='text-center text-3xl text-orange-400'>About Us</h1>
      <button onClick={()=>goToContact()}>Go to Contact page</button>
      <button onClick={()=>
            navigate(+1)
        }>Go Back</button>
    </>
  ) 
}

export default AboutUs