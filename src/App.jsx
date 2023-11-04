import { useState } from 'react'
import './App.css'
import {Navbar} from './components/Navigation/Navbar'
import {Landing} from './components/Navigation/Landing'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing/>
      <Footer/>

    </>
  )
}

export default App
