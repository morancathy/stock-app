import {useEffect, useState} from 'react';

const Stock = (props) => {
  const apiKey = 'a19cc74d29a99191caf28a6610ba20f3';

  //find stock symbol using react dev tools
  const symbol = props.match.params.symbol || 'AAPL';

  //create URL using above 2 variables
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  //state to hold the coin data
  const [stock, setStock] = useState({})    //#### 'stock' is always whatever data type in useState?

  //function to fetch coin data
  const getStock = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setStock(data[0])  // if dev tools shows the data in an array, traverse the array and get the object.
    } catch (error) {     //data[0] is an array with one object.
                          //remember console.log LIES now...always use DEV TOOLS!
      console.log("error: ", error)
    }
  } ;
  // useEffect to run getStock when component mounts
  useEffect(() => {
    getStock()
  },[]);

  // render when data is fetched (if wanted, could write this inline in the return)
  const loaded = () => {
    return (
      <div>
        <h2>{stock.name}</h2>
        <p>Current Price: ${stock.price}</p>
        <p>Change:
          {stock.change > 0 ? <span className="green"> {stock.change}</span> : <span className="red"> {stock.change}</span> }
        </p>
        <p>Open: ${stock.open}</p>
        <p>Day low: ${stock.dayLow}</p>
        <p>Day high: ${stock.dayHigh}</p>
      </div>
    )
  };

  //render when data is loading/if data doesnt exist
   const loading = <h1>Loading...</h1>

  return (
    <div className="stock">
    <h1>Stock page for {symbol}</h1>
    {stock.symbol ? loaded() : loading}
    </div>
  )
};

export default Stock;
