import React from 'react';
import {Link} from 'react-router-dom';
import Products from '../../../../data/products';

// use state to handle product id?

const ProductPageMain = () => {
    const productId = location.pathname.slice(10);
    Products.forEach((item) => console.log(item.id))
    const product = Products.find((item) => item.id === Number(productId));
    

    const imageKeyImport = Object.keys(product.image);
    const imageSrc = product.image[imageKeyImport];
    return (
        <div>
            <h1>{product.name}</h1>
            <img src={imageSrc} alt={product.alt}/>
            <p id="prod-descrip">{product.description}</p>
            <Link to="/contact">Enquire Now</Link>
        </div>
        

    )
}

export {ProductPageMain as default}