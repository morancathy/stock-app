import {Link} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>This is the Home Page</div>
      </Link>
      <Link to="/stocks">
        <div>All Stocks Page</div>
      </Link>
      <Link to="/about">
        <div>This is the About Page</div>
      </Link>
    </div>
  )
};


export default Nav;
