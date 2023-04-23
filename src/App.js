import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import Checkout from './pages/checkout/Checkout' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './components/StateProvider';
import Login from './pages/sing in/Login';
import ProductDetails from './pages/productDetails/ProductDetails';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';
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
