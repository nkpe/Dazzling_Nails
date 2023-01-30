import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";

import App from './App';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Collections from './components/pages/products/collections/Collections';
import ProductsMain from './components/pages/products/productsMain/ProductsMain';

import ProductPageMain from './components/pages/products/productPages/ProductPage';

import UniqueSizes from './components/pages/uniqueSizes/UniqueSizes';
import Aftercare from './components/pages/aftercare/Aftercare';
import Contact from './components/pages/contact/Contact';
import Delivery from './components/pages/delivery/Delivery';
import Faq from './components/pages/faq/Faq';
import Terms from './components/pages/terms/Terms';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="collections" element={<Collections />} />
            <Route path="products">
                <Route path="" element={<ProductsMain />} />
                <Route path=":prodId"
                element={<ProductPageMain />}
                loader={({ params }) => { return params.prodId }}
                />
            </Route>
            
            <Route path="unique-sizes" element={<UniqueSizes />} />
            <Route path="aftercare" element={<Aftercare />} />
            <Route path="contact" element={<Contact />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="faq" element={<Faq />} />
            <Route path="terms" element={<Terms />} />
            <Route path="" element={<Home />} />
        </Route>
    )
)

export { router as default };