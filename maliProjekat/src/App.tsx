import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('dark');
  function toggleMode() {
    setMode((mode) => {
      console.log('clicked')
      return (mode === 'dark' ? 'light' : 'dark')
    })
  }
  console.log(mode)
  return (
    <>
    <Navbar mode={mode} changeMode={toggleMode}/>
    <Main mode={mode}/>
    </>
  )
}

export default App
