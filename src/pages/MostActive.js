import {useEffect, useState} from 'react';

const MostActive = (props) => {
  const apiKey = 'a19cc74d29a99191caf28a6610ba20f3';
  const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apiKey}`;
  const [activeStock, setActiveStock] = useState([])  //changed to array becasue MAP IS ARRAY METHOD

  const getActiveStock = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // setActiveStock(data[0])
      setActiveStock(data)    //changed so I can use the MAP method
    } catch (error) {
      console.log("error: ", error)
    }
  };

  useEffect(() => {
    getActiveStock()
  },[]);

  return (
    <div className="mostactive">
      <h2>Most Active Stocks</h2>                  {/*remember map is an ARRAY method.*/}
      {console.log('line 30', activeStock)}        {/*used activeStock, not activeStock.name*/}
      {activeStock ? activeStock.map((stock, key) => {
        const {ticker, changes, price, changesPercentage, companyName} = stock;
        return (
          <div id='activeOutput'>
            <p id='ticker'>{`${ticker}`}</p>
            <p id='name'>{`${companyName}`}</p>
            <p id='price'>{`Price: $${price}`}</p>
            <p id='change'>Change:
              {changes > 0
                ? <span className="green"> {changes} {changesPercentage}</span>
                : <span className="red"> {changes} {changesPercentage}</span> }
            </p>
          </div>
        )
      }): <h1>....Loading</h1>}
    </div>
  )
};

export default MostActive;
