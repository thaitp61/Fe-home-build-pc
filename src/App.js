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
import Protected from "./home/components/Protected"
import Custom from "./home/pages/Custom"

import ProductCategoryID from './home/components/ProductCategoryID';
import AppSearch from './home/components/AppSearch';
import Login from './home/pages/Login';
import { AuthContextProvider } from './api/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<AppLayout />}>
            {/* <Route exact path='/' index element={<Home />} /> */}
            <Route path="about" element={<Protected><About /></Protected>} />
            <Route path="product/:id" element={<Protected><ComponentDetail /></Protected>} />
            <Route path="cart/" element={<Protected><AppCart /></Protected>} />
            <Route path="checkout/" element={<Protected><AppCheckout /></Protected>} />
            <Route path="custom-pc/" element={<Custom />} />
            <Route path="product-category/:categoryTypeID/" element={<ProductByCategory />} />
            <Route path="product-category/:categoryTypeID/:categoryID/" element={<ProductCategoryID />} />
            <Route path="/search/:searchQuery" element={<AppSearch />} />
            <Route path="contact" element={<Contact />} />
            <Route exact path='login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
