import React from 'react';
import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import Checkout from './component/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './component/StateProvider';
import Login from './component/Login';
import ProductDetails from './component/ProductDetails';
import PageNotFound from './component/PageNotFound';
import Footer from './component/Footer';
function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route  path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer/>
        </div>
      </StateProvider>
    </BrowserRouter>
  );
}
export default App;
