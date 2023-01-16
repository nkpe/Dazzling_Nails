import React from "react";
import { Link } from 'react-router-dom';

import './ProductsMain.css';
import '../ProductsLayout.css';
import Products from "../../../../data/products";
import { json } from "body-parser";

const ProductCard = ({ prodAlt, prodImage, prodName, index, prodId }) => {
	return (
		<div className="product-item prod-child" key={index} id={prodId}>
			<img src={prodImage} alt={prodAlt} />
			<span className="product-label">{prodName}</span>
		</div>
	)
}

const ProductFilters = (collectName, collectValue) => {

	return (
		<select id={{ collectName } + "-filter"} className="filter-item prod-child" value={collectName}>
			<option value={collectValue}>{collectName}</option>
			{/* <option value="gemstone">Gemstone</option>
			<option value="glitter">Glitter</option>
			<option value="marble">Marble</option>
			<option value="summer">Summer</option>
			<option value="animal">Animal</option> */}
		</select>
	)
}

const ProductsMain = () => {
	const allProductCards = Products.map((item, index) => {
		//Access image object stored in Products
		let imageImport = Object.keys(item.image)[0];
		let imageSrc = item.image[imageImport]
		return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} prodId={item.id} />
	})



	let filterMenus = () => {
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
				//let element = new Object();

				let values = new Set();
				for (let i = 0; i < allFilters.length; i++) {
					allFilters[i][el].forEach(item => {
						values.add(item)
					});
				};

				let element = { [el] : values}
				
				console.log("element", element);
			});




			// return filtersCats
		}
		allFilterTitles()



		// filters.forEach(el => {
		// 	return <ProductFilters />
		// })
	}

	filterMenus();
	// return <ProductFilters />




	return (
		<section id="allproductspage" className="page longpage">
			<div id="product-pg-container">
				<h1>Press on Nails</h1>
				<div id="filter-container" className="prod-container">

					<div className="inline-view-all filter-item product-viewAll prod-child">
						<Link to="/products" className="product-viewAll">View All</Link>
					</div>

					{/* <select id="sortby" className="filter-item prod-child" value="product-item">
						<option value="product-item" >Sort By</option>
						<option value="a-z">A-Z</option>
					</select> */}

					{/* {filters} */}
					{/* 
					<select id="colour-list" className="filter-item prod-child" value="product-item">
						<option value="product-item">Colour</option>
						<option value="white">White</option>
						<option value="red">Red</option>
						<option value="pink">Pink & Purple</option>
						<option value="blue">Blue & Green</option>
						<option value="grey">Grey & Silver</option>
						<option value="yellow">Yellow & Orange</option>
						<option value="brown">Brown & Gold</option>
					</select> */}

				</div>

				<div className="prod-container">
					{allProductCards}
				</div>
			</div>
		</section>
	)
}



export default ProductsMain;