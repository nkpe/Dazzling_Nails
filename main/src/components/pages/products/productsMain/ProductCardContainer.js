import React from "react";
import Products from "../../../../data/products";

const ProductCard = ({ prodAlt, prodImage, prodName, index, prodId }) => {
    return (
        <div className="product-item prod-child" key={index} id={prodId}>
            <img src={prodImage} alt={prodAlt} />
            <span className="product-label">{prodName}</span>
        </div>
    )
}

const ProductCardsContainer = ({ prodView, filterName }) => {

    const filterKnown = (value) => {
        const valuesKnown = ["product-viewAll", "a-z", "z-a"];
        return valuesKnown.includes(value);
    };

    // format Products array, before doing .map
    const ProductsFiltered = () => {
        if (filterKnown(prodView)) {

        switch (prodView) {
            case ("product-viewAll"):
                console.log("View all logic hit");
                break;
            case ("a-z"):
                // Products.sort((a,b) => a.name.localeCompare(b.name));
                console.log("a-z logic hit");
                break;
            case ("z-a"):
                console.log("z-a logic hit");
                break;
        }
    } else {
        console.log("filterName", filterName)
     
    };}

    const RenderProducts = (list) => {
        list.map((item, index) => {
            //Access image object stored in Products	
            let imageImport = Object.keys(item.image)[0];
            let imageSrc = item.image[imageImport];

            return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} prodId={item.id} />
        })
    }

    return (
        <div id="product-cards-container" className="prod-container" >
            <ProductsFiltered />
        </div>
    )
}

export default ProductCardsContainer;