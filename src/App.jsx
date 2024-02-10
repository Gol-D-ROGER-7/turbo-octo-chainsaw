import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { RecoilRoot } from 'recoil'
import CoinsSlider from './components/CoinsSlider'

const App = () => {
  return (
    <RecoilRoot>
      <div className='main'>
          <Navbar links={["Home", "About", "Contact", "Youtube"]} />
          <CoinsSlider/>
      </div>
    </RecoilRoot>
  )
}

export default App
