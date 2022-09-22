import React from "react";
import './ProductsMain.css';

const ProductsMain = () => {
    return (
        <section id="allproductspage" className="page longpage">
				<div id="product-pg-container">
					<h1>Press on Nails</h1>
					<div id="filter-container">

						<div className="inline-view-all filter-item product-viewAll">
							<div className="product-viewAll">View All</div>
						</div>

						<select id="sortby" className="filter-item">
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

						<select id="colour-list" className="filter-item">
							<option value="product-item" selected>Colour</option>
							<option value="white">White</option>
							<option value="red">Red</option>
							<option value="pink">Pink & Purple</option>
							<option value="blue">Blue & Green</option>
							<option value="grey">Grey & Silver</option>
							<option value="yellow">Yellow & Orange</option>
							<option value="brown">Brown & Gold</option>
						</select>

					</div>

					<div id="product-container">
						<div className="product-item gemstone glitter red">
							<img src="public/images/products/dazzling_square.jpg" />
							<span className="product-label">Dazzling Square</span>
						</div>
						<div className="product-item animal brown">
							<img src="public/images/products/black_leopard_print.jpg" />
							<span className="product-label">Black Leopard Print</span>
						</div>
						<div className="product-item gemstone white blue">
							<img src="public/images/products/aqua_princess.jpg" />
							<span className="product-label">Aqua Princess</span>
						</div>
						<div className="product-item gemstone glitter marble white pink grey">
							<img src="public/images/products/g.p_glitter_marble_madness.jpg" />
							<span className="product-label">Glitter Marble Madness</span>
						</div>
						<div className="product-item gemstone glitter blue brown">
							<img src="public/images/products/green_gold.jpg" />
							<span className="product-label">Green Gold</span>
						</div>
						<div className="product-item glitter pink">
							<img src="public/images/products/fancy_fushia.jpg" />
							<span className="product-label">Fancy Fushia</span>
						</div>
						<div className="product-item summer seasonal yellow">
							<img src="public/images/products/matt_neon_orange.jpg" />
							<span className="product-label">Matt Neon Orange</span>
						</div>
						<div className="product-item gemstone glitter brown">
							<img src="public/images/products/matt_tan_glitter_gem.jpg" />
							<span className="product-label">Matt Tan Glitter Gem</span>
						</div>
						<div className="product-item glitter white pink">
							<img src="public/images/products/nude_speckle.jpg" />
							<span className="product-label">Nude Speckle</span>
						</div>
						<div className="product-item marble white pink grey">
							<img src="public/images/products/pale_pink_marble_madness.jpg" />
							<span className="product-label">Pale Pink Marble Madness</span>
						</div>
						<div className="product-item gemstone glitter white pink gold">
							<img src="public/images/products/pink_flower_power.jpg" />
							<span className="product-label">Pink Flower Power</span>
						</div>
						<div className="product-item glitter pink">
							<img src="public/images/products/purple_party.jpg" />
							<span className="product-label">Purple Party</span>
						</div>
						<div className="product-item gemstone glitter marble pink grey">
							<img src="public/images/products/purple_passion.jpg" />
							<span className="product-label">Purple Passion</span>
						</div>
						<div className="product-item gemstone glitter red">
							<img src="public/images/products/red_opal_velvet.jpg" />
							<span className="product-label">Red Opal Velvet</span>
						</div>
						<div className="product-item glitter marble pink">
							<img src="public/images/products/rose_gold_marble.jpg" />
							<span className="product-label">Rose Gold Marble</span>
						</div>
						<div className="product-item glitter grey">
							<img src="public/images/products/two_tone_grey_sand.jpg" />
							<span className="product-label">Two Tone Grey Sand</span>
						</div>
					</div>
				</div>
			</section>
    )
}

export default ProductsMain;