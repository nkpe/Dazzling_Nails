import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Collections from './components/pages/products/collections/Collections';
import ProductsMain from './components/pages/products/productsMain/ProductsMain';
import UniqueSizes from './components/pages/uniqueSizes/UniqueSizes';
import Aftercare from './components/pages/aftercare/Aftercare';
import Contact from './components/pages/contact/Contact';
import Delivery from  './components/pages/delivery/Delivery';
import Faq from './components/pages/faq/Faq';
import Terms from './components/pages/terms/Terms'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collections" element={<Collections />} />
          <Route path="products" element={<ProductsMain />} />
          <Route path="unique-sizes" element={<UniqueSizes />} />
          <Route path="aftercare" element={<Aftercare />} />
          <Route path="contact" element={<Contact />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="terms" element={<Terms />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
