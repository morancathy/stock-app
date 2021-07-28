import {Link} from "react-router-dom";

const Dashboard = (props) => {
  const stocks = [
    {name: "Apple Inc.", symbol: "AAPL", price: 140.64, change: -0.280000000000001, dayHigh: 141.74, dayLow: 140.35, open: 141.5},
    {name: "Microsoft Corporation", symbol: "MSFT", price: 64.98, change: 0.109999999999999, dayHigh: 65.45, dayLow: 64.76, open: 65.12},
    {name: "Alphabet Inc.", symbol: "GOOGL", price: 835.14, change: -4.50999999999999, dayHigh: 844, dayLow: 829.1, open: 842},
    {name: "Facebook, Inc.", symbol: "FB", price: 140.34, change: 0.810000000000002, dayHigh: 141.0244, dayLow: 139.76, open: 140.08},
    {name: "Oracle Corporation", symbol: "ORCL", price: 44.65, change: -0.300000000000004, dayHigh: 45.09, dayLow: 44.575, open: 44.91},
    {name: "Intel Corporation", symbol: "INTL", price: 36.16, change: -0.370000000000005, dayHigh: 36.78, dayLow: 36.125, open: 36.58}
  ];

  return (
    <div className="dashboard">
      {stocks.map((stock) => {
        const {name, symbol, price, change, dayHigh, dayLow, open} = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <li>{name}</li>
          </Link>
        )
      })}
    </div>
  )
};

export default Dashboard;
