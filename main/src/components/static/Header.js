import React from 'react';
import './Header.css';
import logo from '../../../src/images/logo.png';

import { Link } from 'react-router-dom';

const mobNav = () => {
    return (
        <aside id="mob-nav">
				<div id="mob-search" className="mob-search-full">
					<i id="mob-search-icon" className="fas fa-search"></i>
					<input className="mob-search-full" type="text" placeholder="" />
				</div>

				<li id="mob-info-btn" className="nav-button info-btn">About</li>

				<Link to="/collections" id="mob-collections-btn" className="nav-button collections-btn">Collections</Link>

				<li id="mob-design-btn" className="nav-button design-btn">Custom</li>

				<li id="mob-care-btn" className="nav-button care-btn">Aftercare</li>
			</aside>
    )
}

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="nav-button info-btn">About</li>
                    <div className="nav-divider">/</div>
                    <li className="nav-button collections-btn">Collections</li>
                    <div className="nav-divider">/</div>
                    <li className="nav-button design-btn">Custom</li>
                    <div className="nav-divider">/</div>
                    <li className="nav-button care-btn">Aftercare</li>
                </ul>
            </nav>

            <div id="mob-nav-button">///</div>

            <div id="cont-logo" className="topbar">
                <img src={logo} alt="Dazzling Nails Co logo" />
            </div>
        </header>
    );
}


export default Header;