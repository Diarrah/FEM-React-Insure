import React, { useRef } from 'react';

import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';

const Navbar = () => {
    const navbarLinks = ['How we work', 'Blog', 'Account'],
          mobileMenu = useRef(),
          { body } = document;

    const mobileMenuOpen = e => {
        e.target.parentElement.classList.toggle('change__icon');
        e.target.nextSibling.classList.remove('spin');
        mobileMenu.current.classList.toggle('mobile__menu__deployed');
        body.parentElement.style.overflowY = 'hidden';   
    }

    const mobileMenuClosed = e => {
        setTimeout(function() {
            e.target.parentElement.classList.toggle('change__icon');
        }, 650);
        e.target.classList.add('spin');
        mobileMenu.current.classList.toggle('mobile__menu__deployed');
        mobileMenu.current.style.transitionDelay = '400ms';
        body.parentElement.style.overflowY = 'visible';
        e.persist();
    }
    
    return (
        <div className="navbar">
            <img className="logo logo--header" src={logo} alt= "Company logo" />
            <ul className="navbar__links" ref={mobileMenu}>
                {navbarLinks.map((link, i) => (
                    <li className="navbar__link" key={`navbar-link-${i}`}>
                        <a href="#">{ link }</a>
                    </li>
                ))}
                <li className="navbar__link">
                    <a href="#" className="btn btn--black">View Plans</a>
                </li>
            </ul>
            <a href="#" className="navbar--mobile">
                <img className="hamburger" src={hamburger} alt="Mobile menu deployment" onClick={mobileMenuOpen} />
                <i class="fa fa-times close" aria-hidden="true" onClick={mobileMenuClosed}></i>
            </a>
        </div>
    )
}

export default Navbar;