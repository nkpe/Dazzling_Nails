import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';

import newIn from '../../../images/new_in.jpg';
import blog from '../../../images/blog.jpg';
import sizeGuide from '../../../images/size_guide.jpg';
import collection from '../../../images/collec_glitter.jpg';

export default function Home() {
    return (
        <section id="homepage" className="page">
            <Link to="/collections" id="lefthome" className="home-shape collec-glitter allproduct-btn">
                <img src={collection} alt="Glitter Collection" />
                <div id="lefthome-text" className="home-text">GLITTER NAILS</div>
            </Link>

            <div className="home-shape-divider"></div>

            <Link to="/collections/new-season" id="midhome" className="home-shape">
                <img src={newIn} alt="New Season" />
                <div id="midhome-text" className="home-text">NEW SEASON</div>
            </Link>

            <div id="hs-div-2" className="home-shape-divider"></div>

            <Link to="/custom" id="mob-bottomlefthome" className="home-shape blog-btn">
                <div id="mob-bottomlefthome-text" className="home-text">Custom</div>
                <img src={blog} alt="Custom" />
            </Link>

            <div id="mob-hs-div-2"></div>

            <Link to="/unique-sizes" id="mob-bottomrighthome" className="home-shape uniquesize-btn">
                <div id="mob-bottomrighthome-text" className="home-text uniquesize-btn">SIZE<br />GUIDE</div>
                <img src={sizeGuide} alt="Size Guide" />
            </Link>

            <Link to="/custom" id="righthome" className="home-shape">
                    <div id="toprighthome-text" className="home-text">Custom</div>
                    <img src={blog} alt="Blog" />
            </Link>

            <Link to="/unique-sizes" id="bottomrighthome" className="uniquesize-btn">
                <div id="bottomrighthome-text" className="home-text">SIZE GUIDE</div>
                <img src={sizeGuide} alt="Size Guide" />
            </Link>

        </section>
    );
}