import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path="/product/productID" element={<SingleProduct />} />


        </Routes>

    </>
  );
}

export default App;
