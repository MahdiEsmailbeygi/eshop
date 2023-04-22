import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Checkout from './components/Checkout' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './components/StateProvider';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
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
