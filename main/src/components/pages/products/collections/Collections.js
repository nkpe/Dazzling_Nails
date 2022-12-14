import React from "react";
import './Collections.css';

import collectAllImg from '../../../../images/collec_all.jpg';
import collectMarbleImg from '../../../../images/collec_marble.jpg';
import collectSeasonImg from '../../../../images/seasonal.jpg';
import collectGlitterImg from '../../../../images/collec_glitter.jpg';
import collectGemsImg from '../../../../images/collec_gemstone.jpg';
import collectAnimalImg from '../../../../images/collec_animal.jpg';

const Collections = () => {
    return (
        <section id="collectionspage" className="page longpage">
        <h1>Nail Collections</h1>
        <div id="collec-container">
            <div className="collec-item allproduct-btn product-viewAll collec-all">
                <img src={collectAllImg} />
                <div className="collec-names">All Nails</div>
            </div>

            <div className="collec-item allproduct-btn collec-marble">
                <img src={collectMarbleImg} alt="Marble collection" />
                <div className="collec-names">Marble</div>
            </div>
            <div className="collec-item allproduct-btn collec-seasonal">
                <img src={collectSeasonImg} alt="Seasonal collection" />
                <div className="collec-names">Summer</div>
            </div>
            <div className="collec-item allproduct-btn collec-glitter">
                <img src={collectGlitterImg} alt="Glitter collection" />
                <div className="collec-names">Glitter</div>
            </div>
            <div className="collec-item allproduct-btn collec-gemstone">
                <img src={collectGemsImg} alt="Gemstone collection" />
                <div className="collec-names">Gemstone</div>
            </div>
            <div className="collec-item allproduct-btn collec-animal">
                <img src={collectAnimalImg} alt="Animal Collection" />
                <div className="collec-names">Animal</div>
            </div>
        </div>
    </section>
    )
}

export default Collections;