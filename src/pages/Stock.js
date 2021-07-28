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
      console.log(data)
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
      <h1>Stock:{stock.name}</h1>
      <p>Symbol:{stock.symbol}</p>
      <p>Price: {stock.price}</p>
      <p>Change: {stock.change}</p>
      <p>Open: {stock.open}</p>
      <p>Day low: {stock.dayLow}.</p>
      <p>Day high: {stock.dayHigh}.</p>
    </div>
  )

  //render when data is loading/if data doesnt exist
   const loading = <h1>Loading...</h1>

  return (
    <div className="stock">
    This is the Stock page for {symbol}.
    {stock ? loaded : loading}
    </div>
  )
};

export default Stock;
