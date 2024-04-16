import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/CheckoutPage';
import Product from './pages/Product';
import YourOrders from './pages/YourOrders';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import UnAuthorized from './pages/UnAuthorized';
function App() {

  const authToken = window.localStorage.getItem('authToken');
  const role = window.localStorage.getItem('role');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={< Checkout/>} />

        <Route path="/orders" element={authToken? (<YourOrders />) : (< UnAuthorized/>)} />
        <Route path="/profile" element={authToken ? (<UserProfile />) : (< UnAuthorized/>)} />
        <Route path="/admin" element={authToken && role ==='ADMIN' ? (<Admin /> ) : (< UnAuthorized/>)} />
      </Routes>

    </>
  );
}

export default App;
