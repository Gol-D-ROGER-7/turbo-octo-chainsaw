import axios from "axios";
import { atom, selector } from "recoil";


export const CoinAtom = atom(({
    key: "CoinAtom",
    default: selector({
        key: "CoinAtomSelector",
        get: async () => {
            let res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            let val = await res.data
            return (val)
        }
    })
}))