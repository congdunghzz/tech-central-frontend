import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/CheckoutPage';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path="/product/productID" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

    </>
  );
}

export default App;
