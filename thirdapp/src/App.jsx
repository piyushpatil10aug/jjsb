import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vaibhav from './components/Vaibhav'
import Mayur from './components/mayur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Vaibhav></Vaibhav>
      <Mayur></Mayur>
    </>
  )
}

export default App
