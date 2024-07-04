import UserContextProvider from './Context/UserContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API </h1>
    </UserContextProvider>
  )
}

export default App
