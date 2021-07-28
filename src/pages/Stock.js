

const Stock = (props) => {
  const apiKey = 'a19cc74d29a99191caf28a6610ba20f3';

  const symbol = props.match.params.symbol;

  return (
    <div className="Stock">
    THis is the Stock page for {symbol}
    </div>
  )
};

export default Stock;
