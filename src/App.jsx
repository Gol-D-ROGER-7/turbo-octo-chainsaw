import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { RecoilRoot } from 'recoil'
import Coins from './components/Coins'
import Footer from './components/Footer'
const CoinSlider = lazy(() => import('./components/CoinsSlider'));

const App = () => {
  return (
    <RecoilRoot>
      <div className='main'>
          <Navbar  />
        <Suspense fallback={<div className='text-white'>Loading...</div>}>
          <CoinSlider />
          <Coins />
        </Suspense>
        <Footer />
      </div>
    </RecoilRoot>
  )
}

export default App
