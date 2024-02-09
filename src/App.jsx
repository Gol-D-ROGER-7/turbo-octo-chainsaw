import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='main'>
        <Navbar links={["Home", "About", "Contact", "Youtube"]} />
        <Hero />
    </div>
  )
}

export default App
