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

            <div id="midhome" className="home-shape">
                <img src={newIn} alt="New Season" />
                <div id="midhome-text" className="home-text">NEW SEASON</div>
            </div>

            <div id="hs-div-2" className="home-shape-divider"></div>

            <div id="mob-bottomlefthome" className="home-shape blog-btn">
                <div id="mob-bottomlefthome-text" className="home-text">BLOG</div>
                <img src={blog} alt="Blog" />
            </div>

            <div id="mob-hs-div-2"></div>

            <div id="mob-bottomrighthome" className="home-shape uniquesize-btn">
                <div id="mob-bottomrighthome-text" className="home-text uniquesize-btn">SIZE<br />GUIDE</div>
                <img src={sizeGuide} alt="Size Guide" />
            </div>

            <div id="righthome" className="home-shape">
                <a href="https://www.instagram.com/dazzlingnailsco/" target="_blank" rel="noopener noreferrer" id="toprighthome" className="blog-btn">
                    <div id="toprighthome-text" className="home-text">BLOG</div>
                    <img src={blog} alt="Blog" />
                </a>

                <div id="bottomrighthome" className="uniquesize-btn">
                    <div id="bottomrighthome-text" className="home-text">SIZE GUIDE</div>
                    <img src={sizeGuide} alt="Size Guide" />
                </div>
            </div>
        </section>
    );
}