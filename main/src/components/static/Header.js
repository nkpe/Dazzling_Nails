import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../../src/images/logo.png';

import { NavBar, MobNavBarIcon } from './NavBar';

const Nav = () => {
    const [screenMobile, setScreenMobile] = useState(null);

    const screenUpdate = () => {
        window.innerWidth <= 450 ? setScreenMobile(true) : setScreenMobile(false);
    }

    window.addEventListener('resize', screenUpdate)

    if (screenMobile) {
        return <MobNavBarIcon />
    } else {
        return <NavBar />
    }
}

const Header = () => {

    return (
        <header>
            <Nav />

            <div id="cont-logo" className="topbar">
                <Link to="/home" id="logo-link">
                    <img src={logo} alt="Dazzling Nails Co logo" />
                </Link>
            </div>
        </header>
    );
}


export default Header;
// export {mobNav};