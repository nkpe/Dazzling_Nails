import React from "react";
import { Link } from 'react-router-dom';

import './ProductsMain.css';
import '../ProductsLayout.css';
import Products from "../../../../data/products";
import {ProductFilterContainer, ProductViewAll, ProductSortBy } from "./ProductFilters";

import { json } from "body-parser";

const ProductCard = ({ prodAlt, prodImage, prodName, index, prodId }) => {
	return (
		<div className="product-item prod-child" key={index} id={prodId}>
			<img src={prodImage} alt={prodAlt} />
			<span className="product-label">{prodName}</span>
		</div>
	)
}

const ProductsMain = () => {
	const allProductCards = Products.map((item, index) => {
		//Access image object stored in Products
		let imageImport = Object.keys(item.image)[0];
		let imageSrc = item.image[imageImport]
		return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} prodId={item.id} />
	})

	const viewAll = () => {
		return
	}

	const sortByAtoZ = () => {
		return
	}
	
	const optionSelect = () => {
		return
	}

	return (
		<section id="allproductspage" className="page longpage">
			<div id="product-pg-container">
				<h1>Press on Nails</h1>
				<div id="filter-container" className="prod-container">

					<ProductViewAll viewAll={viewAll}/>

					<ProductSortBy sortByAtoZ={sortByAtoZ}/>

					<ProductFilterContainer optionSelect={optionSelect}/>

				</div>

				<div className="prod-container">
					{allProductCards}
				</div>
			</div>
		</section>
	)
}



export default ProductsMain;