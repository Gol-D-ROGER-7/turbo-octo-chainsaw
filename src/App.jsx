import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import './App.css'
import { RecoilRoot } from 'recoil'
import CoinsSlider from './components/CoinsSlider'
import Coins from './components/Coins'
const CoinSlider = lazy(() => import('./components/CoinsSlider'));

const App = () => {
  return (
    <RecoilRoot>
      <div className='main'>
          <Navbar  />
          {/* <Nav /> */}
          
        <Suspense fallback={<div>Loading...</div>}>
          <CoinSlider />
        </Suspense>
          <Coins />
      </div>
    </RecoilRoot>
  )
}

export default App
