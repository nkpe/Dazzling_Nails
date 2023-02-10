import React from 'react';

import { Link } from 'react-router-dom'

const MobNavBar = () => {
    return (
        <aside id="mob-nav">
            <div id="mob-search" className="mob-search-full">
                <i id="mob-search-icon" className="fas fa-search"></i>
                <input className="mob-search-full" type="text" placeholder="" />
            </div>

            <Link to="/about" id="mob-info-btn" className="nav-button info-btn">About</Link>

            <Link to="/collections" id="mob-collections-btn" className="nav-button collections-btn">Collections</Link>

            <Link to="/unique-sizes" id="mob-design-btn" className="nav-button design-btn">Custom</Link>

            <Link to="/aftercare" id="mob-care-btn" className="nav-button care-btn">Aftercare</Link>
        </aside>
    )
}

const MobNavBarIcon = () => {
    return (
        <div id="mob-nav-button">
    &#47;&#47;&#47;
    </div>
    )
}

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to="/about" className="nav-button info-btn">About</Link>
                <div className="nav-divider">/</div>
                <Link to="collections" className="nav-button collections-btn">Collections</Link>
                <div className="nav-divider">/</div>
                <Link to="unique-sizes" className="nav-button design-btn">Custom</Link>
                <div className="nav-divider">/</div>
                <Link to="aftercare" className="nav-button care-btn">Aftercare</Link>
            </ul>
        </nav>
    )
}

export {NavBar, MobNavBarIcon}