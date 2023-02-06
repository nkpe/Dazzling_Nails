import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../../../../data/products';

import './ProductPage.css';

// use state to handle product id?

const ProductPageMain = () => {
    const productId = location.pathname.slice(10);
    Products.forEach((item) => console.log(item.id))
    const product = Products.find((item) => item.id === Number(productId));

    const imageKeyImport = Object.keys(product.image);
    const imageSrc = product.image[imageKeyImport];
    return (
        <div id="product-page">
            <img id="prod-pg-img" src={imageSrc} alt={product.alt} />
            <div id="prod-pg-content">
                <h1>{product.name}</h1>
                <p id="prod-descrip">{product.description}</p>
                <Link to="/contact">Enquire Now</Link>
            </div>
        </div>


    )
}

export { ProductPageMain as default }