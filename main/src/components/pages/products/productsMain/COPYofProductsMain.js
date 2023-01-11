import React from "react";
import './ProductsMain.css';
import Products from "../../../../../../data/products";

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
							<img src={dazzSquImg} alt="Red glittery nails with gemstones in square shape" />
							<span className="product-label">Dazzling Square</span>
						</div>
						<div className="product-item animal brown">
							<img src={blkLeoPImg} alt="Leopard spots print in black" />
							<span className="product-label">Black Leopard Print</span>
						</div>
						<div className="product-item gemstone white blue">
							<img src={aquaPrincessImg} alt="Aqua and white Princess style nails with gemstones" />
							<span className="product-label">Aqua Princess</span>
						</div>
						<div className="product-item gemstone glitter marble white pink grey">
							<img src={gMarbMadImg} alt="White and Grey marble with Pink nails, including gemstones" />
							<span className="product-label">Glitter Marble Madness</span>
						</div>
						<div className="product-item gemstone glitter blue brown">
							<img src={greGoldImg} alt="Gold and green glittery nails" />
							<span className="product-label">Green Gold</span>
						</div>
						<div className="product-item glitter pink">
							<img src={fancFushImg} alt="Glittery fushia nails" />
							<span className="product-label">Fancy Fushia</span>
						</div>
						<div className="product-item summer seasonal yellow">
							<img src={matNeoOraImg} alt="Neon Orange nails with matt finish" />
							<span className="product-label">Matt Neon Orange</span>
						</div>
						<div className="product-item gemstone glitter brown">
							<img src={matTanGliImg} alt="Tan nails with gold glitter and gemstones" />
							<span className="product-label">Matt Tan Glitter Gem</span>
						</div>
						<div className="product-item glitter white pink">
							<img src={nudeSpeckImg} alt="Nude nails with monochrome speckles" />
							<span className="product-label">Nude Speckle</span>
						</div>
						<div className="product-item marble white pink grey">
							<img src={plPinkMarbMadImg} alt="Pale pink and grey marble nails" />
							<span className="product-label">Pale Pink Marble Madness</span>
						</div>
						<div className="product-item gemstone glitter white pink gold">
							<img src={pinkFlwrPwrImg} alt="Pink flower nails with gold glitter" />
							<span className="product-label">Pink Flower Power</span>
						</div>
						<div className="product-item glitter pink">
							<img src={prplPartyImg} alt="Purple nails with chunky glitter" />
							<span className="product-label">Purple Party</span>
						</div>
						<div className="product-item gemstone glitter marble pink grey">
							<img src={prplPassImg} alt="Purple and silver marble nails" />
							<span className="product-label">Purple Passion</span>
						</div>
						<div className="product-item gemstone glitter red">
							<img src={redOpalVelvImg} alt="Red nails with velvet finish and opal bow gem" />
							<span className="product-label">Red Opal Velvet</span>
						</div>
						<div className="product-item glitter marble pink">
							<img src={roseGoldMarbImg} alt="Pink nails with rose gold marble pattern" />
							<span className="product-label">Rose Gold Marble</span>
						</div>
						<div className="product-item glitter grey">
							<img src={toneGreySandImg} alt="Two grey tone nails with sand finish" />
							<span className="product-label">Two Tone Grey Sand</span>
						</div>
					</div>
				</div>
			</section>
    )
}

export default ProductsMain;