import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './components/display.css'
// import Display from './components/Display'
import Navbar from './components/Navbar'
import DisplayClass from './components/DisplayClass'
import Quote from './class/quote'

function App() {
  const [count, setCount] = useState(0)
  const [quote, setQuote] = useState('')
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <DisplayClass quote={new Quote('','')}/>
      </main>
    </>
  )
}

export default App
