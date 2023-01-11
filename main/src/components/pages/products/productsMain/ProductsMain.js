import React from "react";
import './ProductsMain.css';
import '../ProductsLayout.css';
import Products from "../../../../data/products";

// import aquaPrincessImg from '../../../../images/products/aqua_princess.jpg';
// import blkLeoPImg from '../../../../images/products/black_leopard_print.jpg';
// import dazzSquImg from '../../../../images/products/dazzling_square.jpg';
// import fancFushImg from '../../../../images/products/fancy_fushia.jpg';
// import gMarbMadImg from '../../../../images/products/g.p_glitter_marble_madness.jpg';
// import greGoldImg from '../../../../images/products/green_gold.jpg';
// // import lovLifeImg from '../../../../images/products/loving_life.jpg';
// import matNeoOraImg from '../../../../images/products/matt_neon_orange.jpg';
// import matTanGliImg from '../../../../images/products/matt_tan_glitter_gem.jpg';
// import nudeSpeckImg from '../../../../images/products/nude_speckle.jpg';
// import plPinkMarbMadImg from '../../../../images/products/pale_pink_marble_madness.jpg';
// import pinkFlwrPwrImg from '../../../../images/products/pink_flower_power.jpg';
// import prplPartyImg from '../../../../images/products/purple_party.jpg';
// import prplPassImg from '../../../../images/products/purple_passion.jpg';
// import redOpalVelvImg from '../../../../images/products/red_opal_velvet.jpg';
// import roseGoldMarbImg from '../../../../images/products/rose_gold_marble.jpg';
// import toneGreySandImg from '../../../../images/products/two_tone_grey_sand.jpg';

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
				<div id="filter-container">

					<div className="inline-view-all filter-item product-viewAll">
						<div className="product-viewAll">View All</div>
					</div>

					{/* <select id="sortby" className="filter-item">
						<option value="product-item" selected>Sort By</option>
						<option value="a-z">A-Z</option>
					</select>

					<select id="collection-list" className="filter-item">
						<option value="product-item" selected>Collections</option>
						<option value="gemstone">Gemstone</option>
						<option value="glitter">Glitter</option>
						<option value="marble">Marble</option>
						<option value="summer">Summer</option>
						<option value="animal">Animal</option>
					</select>

					<select id="colour-list" className="filter-item" defaultValue="product-item">
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

				<div class="prod-container">
					{allProductCards}
				</div>
			</div>
		</section>
	)
}



export default ProductsMain;