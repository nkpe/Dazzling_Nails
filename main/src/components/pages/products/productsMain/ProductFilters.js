import React, { useState } from "react";
import { Link } from "react-router-dom";

import Products from "../../../../data/products";


//Get all collections Filter Categories & Populate with Collections Name
//stored in set to remove duplicates

let allFilterTitles = () => {
    //filterCategories to create individual filter boxes
    let filterCats = new Set()
    let allFilters = [];

    //get all filter categories from 
    Products.forEach(el => {

        //productsFilter = array 
        //for each product, store filters object into an array. & then condense.
        let productsFilter = el.filters;
        allFilters.push(el.filters);
        Object.keys(productsFilter).forEach(item => {
            filterCats.add(item)
        });
    });

    let filterBtnData = [];
    filterCats.forEach(el => {
        let values = new Set();
        for (let i = 0; i < allFilters.length; i++) {
            allFilters[i][el].forEach(item => {
                values.add(item)
            });
        };

        let element = {
            [el]: values
        }
        filterBtnData.push(element);
    });
    return filterBtnData
}

const filterData = allFilterTitles()



const ProductFilters = ({ collectName, collectValues, optionSelect }) => {

    const [selected, setSelected] = useState(0);
    console.log(selected)
    const valueSelected = (e) => {
        setSelected(e.target.value);
    }
    return (
        <div id={`${collectName}-wrapper`}>
            <select id={`${collectName}-filter`} className="filter-item prod-child" defaultValue={collectName} onChange={valueSelected}>
                <option value={collectName}>{collectName}</option>
                {Array.from(collectValues).map((value, index) => {
                    return <option value={value} key={index} onClick={optionSelect}>{value}</option>
                })}
            </select>
        </div>

    )
}

const ProductFilterContainer = ({ optionSelect }) => {
    return (
        <>
            {filterData.map((collection, index) => {
                let collectionName = Object.keys(collection)[0];
                let collectionValues = collection[collectionName];

                return <ProductFilters collectName={collectionName} collectValues={collectionValues} key={index} optionSelect={optionSelect} />
            })}
        </>
    )
}


const ProductViewAll = ({ viewAll }) => {
    return (
        <div className="inline-view-all filter-item product-viewAll prod-child">
            <Link to="/products" className="product-viewAll" onClick={viewAll}>View All</Link>
        </div>
    )
}

const ProductSortBy = ({ sortByAtoZ }) => {
    return (
        <select id="sortby-filter" className="filter-item prod-child" defaultValue="sortby">
            <option value="sortby">Sort By</option>
            <option value="a-z" onClick={sortByAtoZ}>A-Z</option>
        </select>
    )
}

export { ProductFilterContainer, ProductViewAll, ProductSortBy };
