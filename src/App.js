import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/CheckoutPage';
import Product from './pages/Product';
import YourOrders from './pages/YourOrders';
import Login from './pages/Login';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path="/product/productID" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<YourOrders />} />
          <Route path="/login" element={<Login />} />
        </Routes>

    </>
  );
}

export default App;
