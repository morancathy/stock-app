import {Route, Switch} from 'react-router-dom';

import Nav from "./components/Nav";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import MostActive from "./pages/MostActive";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/mostactive">
          <MostActive />
        </Route>
        <Route exact path="/stocks">
          <Dashboard />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
