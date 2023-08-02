import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/HomePage';
import Checkout from './pages/checkout/Checkout' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './Containers/StateProvider';
import Login from './pages/Login/Login';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
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
