import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './ProductsMain.css';
import '../ProductsLayout.css';
import FiltersContainer from "./ProductFilters";
import ProductCardsContainer from "./ProductCardContainer";



const ProductsMain = () => {
	const [prodView, setProdView] = useState("a-z");
	const [filter, setFilter] = useState("viewAll");

	return (
		<section id="allproductspage" className="page longpage">
			<div id="product-pg-container">
				<h1>Press on Nails</h1>

				{/* State from FiltersContainer needs to pass
				into ProductCardsContainer */}

				{/* Callback to pass value from Filters up to 
				this main component to update */}
				<FiltersContainer />

				{/* Pass state value into the below to update
				Product cards */}
				<ProductCardsContainer prodView={prodView} filter={filter}/>

			</div>
		</section>
	)
}



export default ProductsMain;