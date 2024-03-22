import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOutPage/CheckOut';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path="/product/productID" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>

    </>
  );
}

export default App;
