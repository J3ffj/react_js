import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      {/* Login Page */}
      {/* Menu */}
      {/* <nav>
        <Link to="/home">homepage</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>

      </nav> */}

      {/* Routing */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>


      
    </BrowserRouter>
  );
}

export default App;