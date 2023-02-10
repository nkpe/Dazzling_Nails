import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css';

const MobNavBar = () => {
    return (
        <aside id="mob-nav">
            <div id="mob-search" className="mob-search-full">
                <i id="mob-search-icon" className="fas fa-search"></i>
                <input className="mob-search-full" type="text" placeholder="" />
            </div>

            <Link to="/about" id="mob-info-btn" className="nav-link info-btn">About</Link>

            <Link to="/collections" id="mob-collections-btn" className="nav-link collections-btn">Collections</Link>

            <Link to="/unique-sizes" id="mob-design-btn" className="nav-link design-btn">Custom</Link>

            <Link to="/aftercare" id="mob-care-btn" className="nav-link care-btn">Aftercare</Link>
        </aside>
    )
}

const MobNavBarIcon = () => {

    const showNavDropDown = () => {

        return <MobNavBar />
    }

    return (
        <div id="mob-nav-link" onClick={showNavDropDown}>
            &#47;&#47;&#47;
        </div>
    )
}

const NavBar = () => {
    return (
        <nav>
            <Link to="/about" className="nav-link info-btn">About</Link>
            <div className="nav-divider">/</div>
            <Link to="collections" className="nav-link collections-btn">Collections</Link>
            <div className="nav-divider">/</div>
            <Link to="unique-sizes" className="nav-link design-btn">Custom</Link>
            <div className="nav-divider">/</div>
            <Link to="aftercare" className="nav-link care-btn">Aftercare</Link>
        </nav>
    )
}

export { NavBar, MobNavBarIcon }