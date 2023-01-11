import React from "react";
import './ProductsMain.css';
import '../ProductsLayout.css';
import Products from "../../../../data/products";

const ProductCard = ({prodAlt, prodImage, prodName, index}) => {
	return (
		<div className="product-item prod-child" key={index}>
			<img src={prodImage} alt={prodAlt} />
			<span className="product-label">{prodName}</span>
		</div>
	)
}

const ProductsMain = () => {
	let allProductCards = Products.map((item, index) => {
		//Access image object stored in Products
		let imageImport = Object.keys(item.image)[0];
		let imageSrc = item.image[imageImport]
		console.log(imageSrc);
		return <ProductCard prodAlt={item.alt} prodImage={imageSrc} prodName={item.name} index={index} key={index} />
	})

	return (
		<section id="allproductspage" className="page longpage">
			<div id="product-pg-container">
				<h1>Press on Nails</h1>
				<div id="filter-container" className="prod-container">

					<div className="inline-view-all filter-item product-viewAll prod-child">
						<div className="product-viewAll">View All</div>
					</div>

					<select id="sortby" className="filter-item prod-child" value="product-item">
						<option value="product-item" >Sort By</option>
						<option value="a-z">A-Z</option>
					</select>

					<select id="collection-list" className="filter-item prod-child" value="product-item">
						<option value="product-item">Collections</option>
						<option value="gemstone">Gemstone</option>
						<option value="glitter">Glitter</option>
						<option value="marble">Marble</option>
						<option value="summer">Summer</option>
						<option value="animal">Animal</option>
					</select>

					<select id="colour-list" className="filter-item prod-child" value="product-item">
						<option value="product-item">Colour</option>
						<option value="white">White</option>
						<option value="red">Red</option>
						<option value="pink">Pink & Purple</option>
						<option value="blue">Blue & Green</option>
						<option value="grey">Grey & Silver</option>
						<option value="yellow">Yellow & Orange</option>
						<option value="brown">Brown & Gold</option>
					</select>

				</div>

				<div class="prod-container">
					{allProductCards}
				</div>
			</div>
		</section>
	)
}



export default ProductsMain;