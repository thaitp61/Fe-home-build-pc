import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AppLayout from './home/components/AppLayout';
import Home from "./home/pages/Home"
import AppHome from './home/components/AppHome';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './home/pages/About';
import Contact from './home/pages/Contact';
import ComponentDetail from './home/components/ProductDetail';
import AppCart from './home/components/AppCart';
import AppCheckout from './home/components/AppCheckout';
import ProductByCategory from "./home/components/ProductByCategory"
import Custom from "./home/pages/Custom"

import ProductCategoryID from './home/components/ProductCategoryID';
import AppSearch from './home/components/AppSearch';
import Login from './home/pages/Login';

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
