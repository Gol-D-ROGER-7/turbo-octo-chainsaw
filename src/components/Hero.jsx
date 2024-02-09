import axios from 'axios'
import React, { memo, useEffect, useMemo, useState } from 'react'

const Hero = () => {
    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setCoins(response.data)
        // console.log(response.data[0])
      }).catch((error) => {
        console.log(error)
      })
    }, [])
    console.log(coins)
  return (
    <>
        <div className='text-white text-lg'>
            <div>
                <div className='bar'>
                    <h3>#</h3>
                    <h3>Coin</h3>
                </div>
            </div>
        </div>
    </>     
  )
}

export default Hero
