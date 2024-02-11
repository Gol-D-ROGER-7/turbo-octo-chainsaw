import React from 'react'
import { useRecoilValue } from 'recoil'
import { CoinAtom } from '../store/atoms/CoinAtom'

const Coins = () => {
    // const res = useRecoilValue(CoinAtom)
  return (<>
    <div className='text-white flex m-4 p-2 justify-between border-2' >
      <h5>#</h5>
      <h5>Coin</h5>
      <h5>price</h5>
    </div>
    <div className="allcoin text-white flex m-4 px-1 justify-between py-1 border-b-2 items-center cursor-pointer hover:backdrop-brightness-50 ease-in">
       
    </div>
    </>
  )
}

export default Coins




// <div className="img py-2">
// <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" height={40} width={35}/>
// </div>
// <p>Bitcoin<span className='uppercase'>(BTC)</span></p>
// <p>$44444</p>