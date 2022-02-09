import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductTypeMain from './pages/ProductType/ProductTypeMain';
import Member from './pages/Member/Member';
import DetailC from './pages/Detail/DetailC';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productTypeMain" element={<ProductTypeMain />} />
        <Route path="/detail*" element={<DetailC />} />
        <Route path="/member" element={<Member />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products*" element={<ProductTypeMain />} />
        <Route path="/type" element={<ProductTypeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
