import React from 'react'
import { useRecoilValue } from 'recoil'
import { CoinAtom } from '../store/atoms/CoinAtom'

const Coins = () => {
    const res = useRecoilValue(CoinAtom)
  return (<>
    <div className='text-white flex m-4 p-2 justify-between border-2' >
      <h5>#</h5>
      <h5>Coin</h5>
      <h5>price</h5>
    </div>
       {
          res.map((e) => {
            return <div key={e.id}>
              <div className="allcoin text-white flex m-4 px-1 justify-between md:border-b-2 py-1  items-center cursor-pointer hover:backdrop-brightness-50 duration-300 text-center">
                <div className="img py-2">
                  <img src={e.image} alt="" height={40} width={35}/>
                </div>
                <p className=''>{e.name}</p>
                <p>${e.current_price}</p>
              </div>
            </div>
          })
       }
    </>
  )
}

export default React.memo(Coins)


