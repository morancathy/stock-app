import Nav from "./components/Nav";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Dashboard />
      <Home />
      <Stock />
    </div>
  );
}

export default App;
