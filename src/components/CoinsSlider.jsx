import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CoinAtom } from '../store/atoms/CoinAtom'
import Marquee from 'react-fast-marquee'

const CoinsSlider = () => {
  const res = useRecoilValue(CoinAtom)
  // console.log( res)

  
  return (
    <div className='text-white m-5  shadow-3xl'>
      <Marquee >
        {
          res.map((e) => {
            return <>
            <div  className="wrapper  flex gap-5 m-2">
              <div key={e.id} className="single-coin-slider flex gap-1 items-center text-sm">

                <div className="img">
                  <img src={e.image} alt="" height={40} width={35}/>
                </div>

                <div className="info">
                  <p>{e.name}<span className='uppercase'>({e.symbol})</span></p>
                  <p>${e.current_price}</p>
                </div>

              </div>
              </div>
            </>

          })
        }
        {/* <div className="single-coin-slider flex gap-1 items-center text-sm">
          <div className="img">
            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" height={40} width={35}/>
          </div>
          <div className="info">
            <p>Bitcoin<span>(BTC)</span></p>
            <p>$44444</p>
          </div>
        </div> */}
      </Marquee>
    </div>
  )
}

function BtnComponent() {
  const [ count, setCount ] = useState(0)
  return <>
     <button onClick={() => {
      setCount(c => c + 1)
    }}>Count ({count})</button>
  </>
}
export default CoinsSlider
