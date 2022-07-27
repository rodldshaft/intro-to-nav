import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <nav>Ma Navigation</nav>
      {/* OLD WAY */}
      {/* <a href="/home">Go to home</a> */}
      <Link className="test" to="/home">
        Home
      </Link>
      <br />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/product">Go to Product</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
