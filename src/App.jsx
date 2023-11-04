import { useState } from 'react'
import './App.css'
import {Navbar} from './components/Navigation/Navbar'
import {Landing} from './components/Navigation/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing/>
    </>
  )
}

export default App
