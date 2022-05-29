import './App.css';
import Home from './components/home';
import Navbar from './components/navbar/index';
import {Routes, Route} from 'react-router-dom';
import Products from './components/product';
import ProductDetails from './components/productDetails';
import Cart from './components/cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
