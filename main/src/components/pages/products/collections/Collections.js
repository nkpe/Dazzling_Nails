import React from "react";

const Collections = () => {
    return (
        <section id="collectionspage" className="page longpage">
        <h1>Nail Collections</h1>
        <div id="collec-container">
            <div className="collec-item allproduct-btn product-viewAll collec-all">
                <img src="public/images/collec_all.jpg" />
                <div className="collec-names">All Nails</div>
            </div>

            <div className="collec-item allproduct-btn collec-marble">
                <img src="public/images/collec_marble.jpg" />
                <div className="collec-names">Marble</div>
            </div>
            <div className="collec-item allproduct-btn collec-seasonal">
                <img src="public/images/seasonal.jpg" />
                <div className="collec-names">Summer</div>
            </div>
            <div className="collec-item allproduct-btn collec-glitter">
                <img src="public/images/collec_glitter.jpg" />
                <div className="collec-names">Glitter</div>
            </div>
            <div className="collec-item allproduct-btn collec-gemstone">
                <img src="public/images/collec_gemstone.jpg" />
                <div className="collec-names">Gemstone</div>
            </div>
            <div className="collec-item allproduct-btn collec-animal">
                <img src="public/images/collec_animal.jpg" />
                <div className="collec-names">Animal</div>
            </div>
        </div>
    </section>
    )
}

export default Collections;