import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AppLayout from './components/AppLayout';
import Home from "./pages/Home"
import AppHome from './components/AppHome';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';
import ComponentDetail from './components/ProductDetail';
import AppCart from './components/AppCart';
import AppCheckout from './components/AppCheckout';
import ProductByCategory from "./components/ProductByCategory"
import Custom from "./pages/Custom"
import Login from './pages/Login';
import ProductCategoryID from './components/ProductCategoryID';
import AppSearch from './components/AppSearch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product/:id" element={<ComponentDetail />} />
            <Route path="cart/" element={<AppCart />} />
            <Route path="checkout/" element={<AppCheckout />} />
            <Route path="custom-pc/" element={<Custom />} />
            <Route path="product-category/:categoryTypeID/" element={<ProductByCategory />} />
            <Route path="product-category/:categoryTypeID/:categoryID/" element={<ProductCategoryID />} />
            <Route path="/search/:searchQuery" element={<AppSearch />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
