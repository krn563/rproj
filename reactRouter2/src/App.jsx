import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import MainHeader from './Components/MainHeader'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
