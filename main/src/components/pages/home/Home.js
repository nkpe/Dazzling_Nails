import React from "react";
import './Home.css';
// import './HomeResponsive.css';
import { Link } from 'react-router-dom';

import newIn from '../../../images/new_in.jpg';
import blog from '../../../images/blog.jpg';
import sizeGuide from '../../../images/size_guide.jpg';
import collection from '../../../images/collec_glitter.jpg';

const HomeRightDesktop = () => {
    return (
        <>
            <div id="hs-div-2" className="home-shape-divider"></div>

            <div id="righthome" className="home-shape">
                <Link to="/custom" id="toprighthome" className="blog-btn">
                    <div id="toprighthome-text" className="home-text">CUSTOM</div>
                    <img className="home-image" src={blog} alt="Blog" />
                </Link>

                <Link to="/unique-sizes" id="bottomrighthome" className="uniquesize-btn">
                    <div id="bottomrighthome-text" className="home-text">SIZE GUIDE</div>
                    <img className="home-image" src={sizeGuide} alt="Size Guide" />
                </Link>
            </div>
        </>
    );
}
const HomeRightMobile = () => {
    return (
        <>
            <Link to="/custom" id="mob-bottomlefthome" className="home-shape blog-btn">
                <div id="mob-bottomlefthome-text" className="home-text">Custom</div>
                <img className="home-image" src={blog} alt="Custom" />
            </Link>

            <div id="mob-hs-div-2"></div>

            <Link to="/unique-sizes" id="mob-bottomrighthome" className="home-shape uniquesize-btn">
                <div id="mob-bottomrighthome-text" className="home-text uniquesize-btn">SIZE<br />GUIDE</div>
                <img className="home-image" src={sizeGuide} alt="Size Guide" />
            </Link>
        </>
    );
}

const HomeRight = ( { mobView }) => {
    if (mobView){
        return <HomeRightMobile />
    } else {
        return <HomeRightDesktop />
    }
}

const Home = () => {
    let view = window.innerWidth;
    let mobView;

    if (view <= 450){
        mobView = true;
    } else {
        mobView = false;
    }

    return (
        <section id="homepage">
            <Link to="/collections" id="lefthome" className="home-shape collec-glitter allproduct-btn">
                <img className="home-image" src={collection} alt="Glitter Collection" />
                <div id="lefthome-text" className="home-text">GLITTER NAILS</div>
            </Link>

            <div className="home-shape-divider"></div>

            <Link to="/collections/new-season" id="midhome" className="home-shape">
                <img className="home-image" src={newIn} alt="New Season" />
                <div id="midhome-text" className="home-text">NEW SEASON</div>
            </Link>
            

            {<HomeRight mobView={mobView} />}
        </section>
        
    );
}

export default Home;