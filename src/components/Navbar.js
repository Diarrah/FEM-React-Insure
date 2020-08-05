import React from 'react';
import logo from '../images/logo.svg';

import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Navbar = () => {
    const navbarLinks = ['How we work', 'Blog', 'Account'];

    return (
        <div className="navbar">
            <img className="logo logo--header" src={logo} alt= "Company logo" />
            <ul className="navbar__links">
                {navbarLinks.map((link, i) => (
                    <li className="navbar__link" key={`navbar-link-${i}`}>
                        { link }
                    </li>
                ))}
            </ul>
            <button className="btn btn--header">View Plans</button>
            <a href="#" className="navbar--mobile">
                <img className="hamburger hamburger--deploy" src={hamburger} alt="Mobile menu deployment" />
                <img className="close close--undeploy" src={close} alt="X shape for menu undeployment" />
            </a>
        </div>
    )
}

export default Navbar;