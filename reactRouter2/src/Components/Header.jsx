import React from 'react'
import{NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
        <header className='text-center bg-green-800 text-lg flex gap-2'>
        <nav>
            <ul className='flex gap-2'>
                <li><NavLink to="/" className={({isActive})=>
                    `${isActive?"text-white":"text-black"}`
                }>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>
                    `${isActive?"text-white":"text-black"}`
                }>About US</NavLink></li>
                <li><NavLink to="/contact" className={({isActive})=>
                    `${isActive?"text-white":"text-black"}`
                }>Contact Us</NavLink></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header