import {useEffect, useState} from 'react';

const MostActive = (props) => {
  const apiKey = 'a19cc74d29a99191caf28a6610ba20f3';

  const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apiKey}`;

  const [activeStock, setActiveStock] = useState({})

  const getActiveStock = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setActiveStock(data)
      console.log('18', data)
      console.log('19', data[0].ticker)
    } catch (error) {
      console.log("error: ", error)
    }
  };

  useEffect(() => {
    getActiveStock()
  },[]);
console.log('29 ', activeStock[0].ticker)
  return (
    <div className="mostactive">
      <h2>Most Active Stocks</h2>
      {/*}{activeStock.map((stock) => {
        const {ticker, changes, price, changesPercentage, companyName} = stock;

        return (
          <li>{ticker}</li>

        )
      })}*/}
    </div>
  )
};

export default MostActive;
