import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../../src/images/logo.png';

import { NavBar, MobNavBarIcon } from './NavBar';

const Nav = ({screenMob}) => {
    if (screenMob) {
        return <MobNavBarIcon />
    } else {
        return <NavBar />
    }
}

const Header = ({screenMob}) => {

    return (
        <header>
            <Nav screenMob={screenMob}/>

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