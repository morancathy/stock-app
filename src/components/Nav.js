import {Link} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/mostactive">
        <div>Most Active Stocks</div>
      </Link>
    </div>
  )
};


export default Nav;
