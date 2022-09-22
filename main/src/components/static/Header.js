import React from 'react';
import './Header.css';
import logo from '../../../src/images/logo.png';

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