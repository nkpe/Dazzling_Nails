import React, { useState } from "react";
import { Link, generatePath } from 'react-router-dom';
import Products from "../../../../data/products";
import { filterData } from "./ProductFilters";

const ProductCard = ({ prodAlt, prodImage, prodName, index, prodId }) => {
    return (
        <Link to={generatePath("/products/:prodId", {prodId: prodId})}>
            <div className="product-item prod-child" key={index} id={prodId}>
                <img src={prodImage} alt={prodAlt} />
                <span className="product-label">{prodName}</span>
            </div>
        </Link>

    )
}


const ProductCardsContainer = ({ prodView, filterName }) => {
    let filteredProductsList = [];

    const filterKnown = (value) => {
        const valuesKnown = ["product-viewAll", "a-z", "z-a"];
        return valuesKnown.includes(value);
    };

    // format Products array, before doing .map
    const ProductsFiltered = () => {
        if (filterKnown(prodView) || prodView === filterName) {
            switch (prodView) {
                case ("z-a"):
                    filteredProductsList = Products.sort((a, b) => -1 * a.name.localeCompare(b.name));
                    break;
                default:
                    // view all Alphabetically
                    filteredProductsList = Products.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }
        } else {
            filteredProductsList = Products.filter((item) => {
                let itemFilters = Object.keys(item.filters);
                if (itemFilters.includes(filterName)) {
                    let itemFilterProps = item.filters[filterName];
                    if (itemFilterProps.includes(prodView)) {
                        return item
                    }
                }
            });


        };
    };
    ProductsFiltered();


    return (
        <div id="product-cards-container" className="prod-container">
            {filteredProductsList.map((item, index) => {
                //Access image object stored in Products	
                let imageImport = Object.keys(item.image)[0];
                let imageSrc = item.image[imageImport];

                return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} prodId={item.id} />
            })}
        </div>
    )
}

export default ProductCardsContainer;