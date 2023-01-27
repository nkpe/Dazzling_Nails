import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './ProductsMain.css';
import '../ProductsLayout.css';
import FiltersContainer from "./ProductFilters";
import ProductCardsContainer from "./ProductCardContainer";



const ProductsMain = () => {
	let [prodView, setProdView] = useState("a-z");
	let [filter, setFilter] = useState("product-viewAll");

	const filterCallback = (e) => {
		let value = null;
		// console.log(e)


		if (e.target.className.includes("product-viewAll")) {
			value = "product-viewAll";
		} else {
			value = e.target.value;
		};

		setProdView(value);
		// console.log("prodView", prodView);
	}

	return (
		<section id="allproductspage" className="page longpage">
			<div id="product-pg-container">
				<h1>Press on Nails</h1>

				{/* State from FiltersContainer needs to pass
				into ProductCardsContainer */}

				{/* Callback to pass value from Filters up to 
				this main component to update */}
				<FiltersContainer filterCallback={filterCallback}/>

				{/* Pass state value into the below to update
				Product cards */}
				<ProductCardsContainer prodView={prodView} filter={filter}/>

			</div>
		</section>
	)
}



export default ProductsMain;