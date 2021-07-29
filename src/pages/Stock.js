import {useEffect, useState} from 'react';

const Stock = (props) => {
  const apiKey = 'a19cc74d29a99191caf28a6610ba20f3';

  //find stock symbol using react dev tools
  const symbol = props.match.params.symbol || 'COIN';

  //create URL using above 2 variables
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  //state to hold the coin data
  const [stock, setStock] = useState({})

  //function to fetch coin data
  const getStock = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setStock(data)
      console.log('data', data)
    } catch (error) {
      console.log("error: ", error)
    }
  } ;
  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock()
  },[]);

  // render when data is fetched (if wanted, could write this inline in the return)
  const loaded = (
    <div>
      <h2>Symbol: {stock[0].symbol}</h2>
      <p>Current Price: {stock[0].price}</p>
      <p>Change: {stock[0].change}</p>
      <p>Open: {stock[0].open}</p>
      <p>Day low: {stock[0].dayLow}.</p>
      <p>Day high: {stock[0].dayHigh}.</p>
    </div>
  )

  //render when data is loading/if data doesnt exist
   const loading = <h1>Loading...</h1>

  return (
    <div className="stock">
    <h1>Stock page for {stock[0].name}</h1>
    {stock ? loaded : loading}
    </div>
  )
};

export default Stock;
