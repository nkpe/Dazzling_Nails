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

const ProductCardsContainer = ({ prodView, filter }) => {

    // HANDLE PRODVIEW STATE
    let eachProduct;
    
    const filterKnown = (value) => {
        const valuesKnown = ["viewAll", "a-z", "z-a"];
        return valuesKnown.includes(value);
    };

    // format Products array, before doing .map
    if (filterKnown(prodView)) {

        eachProduct = document.getElementsByClassName('product-item');

        for (let item of eachProduct) {
            item.style.display = "block";
        };

        switch (prodView) {
            case ("viewAll"):
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
        console.log("custom filter logic")
        // Products.forEach((item) => {
        //     if (item.filters.filter.includes(prodView)) {
        //         eachProduct = document.getElementById(item.id);
        //         prod.style.display = "block";
        //     } else {
        //         prod.style.display = "none";
        //     }
        // })
    };

    const viewAllProducts = Products.map((item, index) => {
        //Access image object stored in Products	
        let imageImport = Object.keys(item.image)[0];
        let imageSrc = item.image[imageImport];

        return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} prodId={item.id} />
    })
 
    return (
        <div id="product-cards-container" className="prod-container" >
            {viewAllProducts}
        </div>
    )
}

export default ProductCardsContainer;