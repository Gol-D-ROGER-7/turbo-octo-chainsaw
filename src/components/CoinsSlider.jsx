import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import axios from 'axios'

const CoinsSlider = () => {


  const [data, setData ] = useState([])
  const [fetched, setFetched] = useState(false);


  const getData = async () => {
    try {
      if (!fetched) {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const val = res.data;
        setData(val);
        setFetched(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    
    getData();
  }, [fetched]);
  return (
    <div className='text-white m-5 shadow-2xl bg '>
      <Marquee >
        {
          data.map((e) => {
            return <div key={e.id}>
            <div   className="wrapper  flex gap-5 m-2 ">
              <div className="single-coin-slider flex gap-1 items-center text-sm">

                <div className="img">
                  <img src={e.image} alt="" height={40} width={35}/>
                </div>

                <div className="info">
                  <p>{e.name}<span className='uppercase'>({e.symbol})</span></p>
                  <p>${e.current_price}</p>
                </div>

              </div>
              </div>
              </div>

          })
        }
      </Marquee>
    </div>
  )
}

export default React.memo(CoinsSlider);
