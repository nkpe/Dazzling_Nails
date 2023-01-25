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



const ProductDataFilters = ({ filterName, filterValues, optionSelect }) => {

    const [selected, setSelected] = useState(0);
    console.log(selected)
    const valueSelected = (e) => {
        setSelected(e.target.value);
    }
    return (
        <div id={`${filterName}-wrapper`}>
            <select id={`${filterName}-filter`} className="filter-item prod-child" defaultValue={filterName} onChange={valueSelected}>
                <option value={filterName}>{filterName}</option>
                {Array.from(filterValues).map((value, index) => {
                    return <option value={value} key={index} onClick={optionSelect}>{value}</option>
                })}
            </select>
        </div>

    )
}

// Generating any filters determined by Product data
const ProductFilterContainer = ({ optionSelect }) => {
    return (
        <>
            {filterData.map((filter, index) => {
                let filterName = Object.keys(filter)[0];
                let filterValues = filter[filterName];

                return <ProductDataFilters filterName={filterName} filterValues={filterValues} key={index} optionSelect={optionSelect} />
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

const ProductSortBy = ({ sortBy }) => {
    return (
        <select id="sortby-filter" className="filter-item prod-child" defaultValue="sortby" onChange={sortBy}>
            <option value="sortby">Sort By</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>
    )
}

const FiltersContainer = () => {

    const viewAll = () => {
		return
	}

	const sortBy = ({value}) => {
		setProdView(value);

		console.dir(<ProductCard />);
		console.log("Sort By working");

		// Product Card component - get prodName and sort by. 
		return
	}
	
	const optionSelect = () => {
		const productUpdate = () => {
			
		}

		return
	}
    
    return (
        <div id="filter-container" className="prod-container">

            <ProductViewAll viewAll={viewAll} />

            <ProductSortBy sortBy={sortBy} />

            <ProductFilterContainer optionSelect={optionSelect} />

        </div>
    )
}

export default FiltersContainer;
